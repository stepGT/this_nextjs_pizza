'use client';

import {
  CheckoutItem,
  CheckoutItemSkeleton,
  Container,
  Title,
  WhiteBlock,
} from '@/components/shared';
import { CheckoutSidebar } from '@/components/shared';
import { FormInput } from '@/components/shared/form';
import { Input, Textarea } from '@/components/ui';
import { PizzaSize, PizzaType } from '@/constants/pizza';
import { useCart } from '@/hooks';
import { getCartItemDetails } from '@/lib';

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
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              {loading
                ? [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />)
                : items.map((item) => (
                    <CheckoutItem
                      key={item.id}
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaType,
                        item.pizzaSize as PizzaSize,
                      )}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      disabled={item.disabled}
                      onClickCountButton={(type) =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Personal data">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Name" />
              <Input name="lastName" className="text-base" placeholder="Lastname" />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <FormInput name="phone" className="text-base" placeholder="Phone" />
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
          <CheckoutSidebar loading={loading} totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
