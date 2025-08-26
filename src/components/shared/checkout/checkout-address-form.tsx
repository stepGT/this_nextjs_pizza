'use client';

import { FC } from 'react';
import { WhiteBlock } from '../white-block';
import { FormTextarea } from '../form';
import { Controller, useFormContext } from 'react-hook-form';
import { AdressInput } from '../address-input';
import { ErrorText } from '../error-text';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: FC<Props> = ({ className }) => {
  const { control } = useFormContext();
  return (
    <WhiteBlock title="3. Delivery address" className={className}>
      <div className="grid grid-col gap-5">
        <Controller
          control={control}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <AdressInput onChange={field.onChange} />
              {fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
            </>
          )}
        />
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
