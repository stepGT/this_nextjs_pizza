import { FC, useState } from 'react';
import { cn } from '@/lib/utils';
import { PizzaImage } from './pizza-image';
import { Title } from './title';
import { Button } from '../ui';
import { GroupVariants } from './group-variants';
import { PizzaSize, pizzaSizes, PizzaType, pizzaTypes } from '@/constants/pizza';
import { Ingredient } from '@prisma/client';
import { IngredientItem } from './ingredient-item';
import { useSet } from 'react-use';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items?: any[];
  onSubmit: (itemID: number, ingredients: number[]) => void;
  className?: string;
}

/**
 * Форма выбора ПИЦЦЫ
 */
export const ChoosePizzaForm: FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  onSubmit,
  className,
}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]))
  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">30см, традиционное тесто 30</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((i) => (
              <IngredientItem
                key={i.id}
                name={i.name}
                price={i.price}
                imageUrl={i.imageUrl}
                onClick={() => addIngredient(i.id)}
                active={selectedIngredients.has(i.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onSubmit={() => {}}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {350} ₽
        </Button>
      </div>
    </div>
  );
};
