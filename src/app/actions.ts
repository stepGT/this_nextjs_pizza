'use server';

import { CheckoutFormValues } from '@/constants';
import { prisma } from '../../prisma/prisma-client';
import { OrderStatus } from '@prisma/client';
import { cookies } from 'next/headers';
import { sendEmail } from '@/lib';
import { PayOrderTemplate } from '@/components/shared/email-temapltes/pay-order';

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('Cart token not found');
    }

    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error('Cart not found');
    }

    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty');
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
      },
    });

    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartID: userCart.id,
      },
    });

    const paymentUrl = 'http://paymentUrl.ru';

    await sendEmail(
      data.email,
      'Next Pizza / Оплатите заказ #' + order.id,
      PayOrderTemplate({
        orderID: order.id,
        totalAmount: order.totalAmount,
        paymentUrl,
      }),
    );
    return paymentUrl;
  } catch (error) {}
}
