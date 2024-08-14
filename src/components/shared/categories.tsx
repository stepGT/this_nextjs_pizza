import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const categories = [
  'Пиццы',
  'Комбо',
  'Закуски',
  'Коктейли',
  'Кофе',
  'Напитки',
  'Десерты',
];
const categoryActiveId = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map((cat, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === index && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${cat}`}
          key={index}>
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
