import { ProductProps } from "../types/product";
import currencyFormatter from "../helpers/currencyFormatter";
import ImageComponent from "./ImageComponent";

const CardProduct = (product: ProductProps) => {
  const { title, image, price } = product;
  return (
    <>
      <div className="box shadow-lg rounded p-3 cursor-pointer w-full max-h-[430px] min-h-[480px] transform transition duration-800  hover:scale-100">
        <div className="p-5 text-center flex flex-col justify-center relative h-[300px]">
          <ImageComponent alt={title} src={image} width={240} height={240} />
        </div>
        <div className="min-h-20 text-sm">{title}</div>
        <div className="text-right text-purple-400 pt-1">
          {price ? currencyFormatter.format(price) : 0}
        </div>
      </div>
    </>
  );
};

export default CardProduct;
