import { FC } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  text: string;
  className?: string;
}

export const ErrorText: FC<Props> = ({ text, className }) => {
  return <p className={cn('text-red-500 text-sm', className)}>{text}</p>;
};
