'use client';

import { FC, InputHTMLAttributes } from 'react';
import { Input } from '@/components/ui';
import { useFormContext } from 'react-hook-form';
import { RequiredSymbol } from '../required-symbol';
import { ErrorText } from '../error-text';
import { ClearButton } from '../clear-button';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: FC<Props> = ({ className, name, label, required, ...props }) => {
  const onClickClear = () => {};

  return (
    <div className={className}>
      {label && (
        <p className="font-medium mb-2">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input className="h-12 text-md" {...props} />

        <ClearButton onClick={onClickClear} />
      </div>

      <ErrorText text={'Error'} className="mt-2" />
    </div>
  );
};
