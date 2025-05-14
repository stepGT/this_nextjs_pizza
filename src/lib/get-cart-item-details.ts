import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';

export const getCartItemDetails = (
  ingredients: any[],
  pizzaType?: PizzaType,
  pizzaSize?: PizzaSize,
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};
