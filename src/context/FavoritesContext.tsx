import { createContext } from "react";
import { ProductProps } from "../types/product";

export interface FavoritesContextType {
  favorites: ProductProps[];
  isFavoriteFind: (id: number | string) => boolean;
  addFavorite: (product: ProductProps) => void;
  removeFavorite: (product: ProductProps) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    isFavoriteFind: () => false,
    addFavorite: () => {},
    removeFavorite: () => {},
});