import { ReactNode, useState } from "react";
import { CartContext } from "./CartContext";
import { ProductProps } from "../types/product";

interface Props {
  children: ReactNode;
}

const CartProvider = (props: Props) => {
  const { children } = props;
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [quantity] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = (item: ProductProps, quantity: number) => {
    const isItemCart = isCartFind(item.id);

    if (isItemCart !== -1) {
      //exist item!
      const updateCart = [...cart];
      updateCart[isItemCart].quantity += quantity;

      setCart(updateCart);
    } else {
      //New Item!
      item.quantity = quantity;
      //setSubTotal(item.price);
      addItemCart(item);
    }

    setTotalQuantity((prevTotal) => prevTotal + quantity);
    setSubTotal((prevTotal) => prevTotal + item.price * quantity);
  };

  const addItemCart = (item: ProductProps) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItemCart = (itemId: number, quantity: number) => {
    const itemToRemove = cart.find((item) => item.id === itemId);

    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));

    setTotalQuantity((prevTotal) => prevTotal - quantity);
    setSubTotal(
      (prevTotal) => prevTotal - itemToRemove?.price * itemToRemove?.quantity
    );
  };

  const isCartFind = (id: number) => {
    return cart.findIndex((itemCart) => itemCart.id == id);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeItemCart,
        isCartFind,
        cart,
        quantity,
        totalQuantity,
        subTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
