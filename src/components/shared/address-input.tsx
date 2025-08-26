'use client';

import { FC } from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="c852e4da95c18ce22b9df5420f9836bb102d96ec"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
