import { createContext } from "react";
import { ProductProps, Order } from "../types/product";

export interface ProductContextType {
  listProducts: ProductProps[];
  isLoading?: boolean;
  filteredProducts?: ProductProps[];
  termSearch?: string;
  category?: string | undefined;
  searchProducts: (term: string) => void;
  sortProducts: (sort: Order) => void;
  getCategoryParam: (cat: string | null) => void;
}

export const ProductsContext = createContext<ProductContextType>({
  listProducts: [],
  isLoading: false,
  filteredProducts: [],
  termSearch: "",
  category: undefined,
  searchProducts: () => {},
  sortProducts: () => {},
  getCategoryParam: () => {},
});
