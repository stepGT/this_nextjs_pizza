'use client';

import { FC } from 'react';
import { WhiteBlock } from '../white-block';
import { Input } from '@/components/ui';
import { FormTextarea } from '../form';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Delivery address" className={className}>
      <div className="grid grid-col gap-5">
        <Input name="address" className="text-base" placeholder="Address" />
        <FormTextarea
          name="comment"
          className="text-base"
          placeholder="Комментарий к заказу"
          rows={5}
        />
      </div>
    </WhiteBlock>
  );
};
