// type Props = {}

import { CircleMinus, CircleX, CirclePlus } from "lucide-react";
import { ProductProps } from "../types/product";
import currencyFormatter from "../helpers/currencyFormatter";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Button, Input, Space } from "antd";
import ImageComponent from "./ImageComponent";

function CardMiniProduct(props: ProductProps) {
  const { removeItemCart, addToCart } = useContext(CartContext);

  const deleteItem = (id: number) => {
    removeItemCart(id, props.quantity);
  };

  const addItem = () => {
    addToCart(props, 1);
  };

  const removeItem = () => {
    addToCart(props, -1);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap mb-2 justify-between ">
        <figure className="w-4/5 text-left">
          <ImageComponent
            alt={props.title}
            src={props.image}
            width={100}
            height={100}
          />
        </figure>
        <div onClick={() => deleteItem(props.id)}>
          <CircleX
            className="text-gray-400 hover:text-gray-500 cursor-pointer"
            width={20}
            height={20}
          />
        </div>
        <div className="text-left">
          <p className="font-light text-xs">{props.title}</p>
          <p className="font-bold py-2">
            {currencyFormatter.format(props.price)}
          </p>
          <Space.Compact>
            <Button
              type="link"
              disabled={props.quantity <= 1 && true}
              onClick={() => {
                removeItem();
              }}
              className="text-purple-500 hover:text-[#bbf7d0] pr-2 pl-0"
            >
              <CircleMinus width={16} height={16} />
            </Button>
            <Input
              type="tel"
              className="w-10 h-8 text-gray-500"
              defaultValue={props.quantity}
              value={props.quantity}
            />
            <Button
              type="link"
              onClick={() => {
                addItem();
              }}
              className="text-purple-500 hover:text-[#bbf7d0] pl-2 pr-0"
            >
              <CirclePlus width={16} height={16} />
            </Button>
          </Space.Compact>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
}

export default CardMiniProduct;
