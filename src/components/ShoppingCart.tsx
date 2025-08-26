import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CardMiniProduct from "./CardMiniProduct";
import currencyFormatter from "../helpers/currencyFormatter";
import { ProductProps } from "../types/product";
import { useNavigate } from "react-router-dom";

type Props = {
  deleteButton: true | false;
};

function ShoppingCart(props: Props) {
  const { deleteButton } = props;
  const { cart, totalQuantity, subTotal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <div>
        {!totalQuantity ? (
          <h2 className="text-center text-4xl font-bold py-5">
            Carrito Vacio 😔
          </h2>
        ) : (
          <div>
            {cart.map((item: ProductProps) => (
              <CardMiniProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                quantity={item.quantity}
              />
            ))}
            <div className="text-right pb-5">
              <h1 className="text-3xl font-bold pb-2">Subtotal</h1>
              <p className="text-2xl">{currencyFormatter.format(subTotal)}</p>
            </div>
            <hr />
            <div className="w-full pt-5">
              {!deleteButton && (
                <button
                  onClick={() => navigate("/cart")}
                  type="button"
                  className="w-full h-10 border bg-purple-500 hover:bg-purple-800 active:bg-purple-400 text-white font-light shadow-xl rounded-full"
                >
                  Ver Carrito
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
