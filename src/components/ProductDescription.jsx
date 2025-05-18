import QuantitySelector from "./QuantitySelector";
import { product } from "../data/productData";


function ProductDescription() {
  const firstProduct = product[0]; // access the first product

  return (
    <section className="space-y-4 ">
      <h3 className="uppercase font-semibold text-grayishBlue tracking-wide">
        Sneaker Company
      </h3>

      <h1 className="text-4xl font-black leading-tight">{firstProduct.name}</h1>

      <p className="text-lg text-grayishBlue">{firstProduct.description}</p>

      <div className="flex items-center space-x-4">
        <p className="font-black text-2xl">${firstProduct.price}</p>
        <span className="rounded-md bg-black text-white py-1 px-2 text-sm">
          {firstProduct.discount}%
        </span>
      </div>

      <p className="text-grayishBlue line-through">
        ${firstProduct.originalPrice}
      </p>

      <QuantitySelector product={firstProduct} />
    </section>
  );
}

export default ProductDescription;
