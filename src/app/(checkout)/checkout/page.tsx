'use client';

import { Container, Title, WhiteBlock } from '@/components/shared';
import { CheckoutSidebar } from '@/components/shared';
import { Input, Textarea } from '@/components/ui';
import { useCart } from '@/hooks';
import { CheckoutCart } from '@/components/shared/checkout';
import { CheckoutPersonalForm } from '@/components/shared/checkout/checkout-personal-form';

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart();
  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };
  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />
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
    </Container>
  );
}
