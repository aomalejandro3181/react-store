import { useContext } from "react";
import ShoppingCart from "../../components/ShoppingCart";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  //TODO: debo entender porque genera error del typescript
  const { totalQuantity } = useContext(CartContext); 
  return (
    <>
      <h1 className="text-5xl font-semibold pb-10 text-left">Carrito 🛒</h1>
      <div className="container md:w-3/5 lg:w-1/2 mx-auto">
        <ShoppingCart deleteButton={true} />
        {totalQuantity ? (
          <button className="animate-pulse w-1/2 h-10 border bg-purple-500 hover:bg-purple-800 hover:animate-none active:bg-purple-400 text-white font-light shadow-xl rounded-full">
            No lo pienses Compra 🔥
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Cart;
