'use client';

import { Container, Title, WhiteBlock } from '@/components/shared';
import { CheckoutSidebar } from '@/components/shared';
import { Input, Textarea } from '@/components/ui';
import { useCart } from '@/hooks';
import { CheckoutCart } from '@/components/shared/checkout';
import { CheckoutPersonalForm } from '@/components/shared/checkout/checkout-personal-form';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutFormSchema, CheckoutFormValues } from '@/constants';

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      comment: '',
    },
  });
  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  const onSubmit = async (data: CheckoutFormValues) => {
    console.log(data)
    try {
    } catch (err) {}
  };
  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                items={items}
                loading={loading}
              />

              <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />

              <WhiteBlock title="3. Delivery address">
                <div className="grid grid-col gap-5">
                  <Input name="address" className="text-base" placeholder="Address" />
                  <Textarea placeholder="Comment" className="text-base" rows={5} />
                </div>
              </WhiteBlock>
            </div>

            <div className="w-[450px]">
              <CheckoutSidebar loading={loading} totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
