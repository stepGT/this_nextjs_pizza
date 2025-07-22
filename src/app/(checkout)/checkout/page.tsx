'use client';

import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from '@/components/shared';
import { Button, Input, Textarea } from '@/components/ui';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              <CheckoutItem
                id={1}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                details={'Lorem ipsum dolor'}
                name="Чоризо фреш"
                price={216}
                quantity={3}
              />
              <CheckoutItem
                id={1}
                imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                details={'Lorem ipsum dolor'}
                name="Чоризо фреш"
                price={216}
                quantity={3}
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Personal data">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Name" />
              <Input name="lastName" className="text-base" placeholder="Lastname" />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Phone" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Delivery address">
            <div className="grid grid-col gap-5">
              <Input name="address" className="text-base" placeholder="Address" />
              <Textarea placeholder="Comment" className="text-base" rows={5} />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Total</span>
              <span className="text-[34px] font-extrabold">3506 ₽</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-300" />
                  Cost of product
                </div>
              }
              value="3506 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-300" />
                  Taxes
                </div>
              }
              value="3506 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-300" />
                  Delivery
                </div>
              }
              value="3506 ₽"
            />
            <Button type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
              Pay
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
