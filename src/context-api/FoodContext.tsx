'use client';

import { getDataPath } from '@/utils/pathUtils';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import { FoodData } from '@/types/Food/fooddata';

interface Filters {
  keyword: string;
  location: string;
  category: string;
  status: string;
  tag: string;
  rating: string;
  preparationTime: string;
}

interface FoodContextType {
  LFood: FoodData[];
  setLFood: Dispatch<SetStateAction<FoodData[]>>;
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  updateFilter: (key: keyof Filters, value: string) => void;
}

export const FoodContext = createContext<FoodContextType | undefined>(
  undefined
);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [allLFood, setAllLFood] = useState<FoodData[]>([]);
  const [LFood, setLFood] = useState<FoodData[]>([]);

  const [filters, setFilters] = useState<Filters>({
    keyword: '',
    location: '',
    category: '',
    status: '',
    tag: '',
    rating: '',
    preparationTime: '',
  });

  useEffect(() => {
    const loadLFood = async () => {
      try {
        const res = await fetch(getDataPath('/data/fooddata.json'));
        const data: FoodData[] = await res.json();

        setAllLFood(data);
        setLFood(data);
      } catch (error) {
        console.error('Failed to load food data:', error);
      }
    };

    loadLFood();
  }, []);

  // Apply Filters
  useEffect(() => {
    const filteredLFood = allLFood.filter((food) => {
      return (
        (!filters.keyword ||
          food.food_title
            ?.toLowerCase()
            .includes(filters.keyword.toLowerCase())) &&

        (!filters.location ||
          food.location?.toLowerCase() ===
            filters.location.toLowerCase()) &&

        (!filters.tag ||
          food.tag?.toLowerCase() ===
            filters.tag.toLowerCase()) &&

        (!filters.status ||
          food.status === filters.status) &&

        (!filters.category ||
          food.category?.toLowerCase() ===
            filters.category.toLowerCase()) &&

        (!filters.rating ||
          food.rating == filters.rating) &&

        (!filters.preparationTime ||
          food.preparation_time ===
            `${filters.preparationTime} mins`)
      );
    });

    setLFood(filteredLFood);
  }, [filters, allLFood]);

  const updateFilter = (
    key: keyof Filters,
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <FoodContext.Provider
      value={{
        LFood,
        setLFood,
        filters,
        setFilters,
        updateFilter,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};