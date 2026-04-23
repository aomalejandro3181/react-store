import { createContext } from "react";
import { ProductProps } from "../types/product";

interface CartContextType {
  addToCart: (item: ProductProps, quantity: number) => void;
  removeItemCart: (itemId: number, quantity: number) => void;
  isCartFind: (id: number | string) => number;
  cart: ProductProps[];
  quantity: number;
  totalQuantity: number;
  subTotal: number;
}

export const CartContext = createContext<CartContextType>({
  addToCart: () => {},
  removeItemCart: () => {},
  isCartFind: () => 0,
  cart: [],
  quantity: 0,
  totalQuantity: 0,
  subTotal: 0,
});
