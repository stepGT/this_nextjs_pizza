import { useEffect, useState } from 'react';
import { API } from '../services/api-client';
import { Ingredient } from '@prisma/client';
import { useSet } from 'react-use';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIDs: Set<string>;
  onAddID: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIDs, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await API.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return {
    ingredients,
    loading,
    onAddID: toggle,
    selectedIDs,
  };
};
