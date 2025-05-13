import QuantitySelector from "./QuantitySelector";
import { product } from "../data/productData";


function ProductDescription() {
  return (
    <section className="space-y-4 w-[350px]">
      <h3 className="uppercase font-semibold text-grayishBlue tracking-wide">
        Sneaker Company
      </h3>

      <h1 className="text-3xl font-black leading-tight">{product.name}</h1>

      <p className="text-md text-grayishBlue">
       {product.description}
      </p>

      <div className="flex items-center space-x-4">
        <p className="font-black text-lg">${product.price}</p>
        <span className="rounded-md bg-black text-white py-1 px-2 text-sm">
          {product.discount}%
        </span>
      </div>

      <p className="text-grayishBlue line-through">${product.originalPrice}</p>

      <QuantitySelector product={product} />
    </section>
  );
}

export default ProductDescription;
