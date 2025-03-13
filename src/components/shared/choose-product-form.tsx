'use client';

import React from 'react';
import { Ingredient, ProductItem } from '@prisma/client';
import { cn } from '@/lib/utils';
import { ProductImage } from './product-image';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAdd,
  className,
}) => {
  const textDetaills = `30 см, традиционное тесто 30`;
  const totalPrice = 1000;
  return (
    <div className={cn(className, 'flex flex-1')}>
      <ProductImage imageUrl={imageUrl} size={30} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetaills}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
