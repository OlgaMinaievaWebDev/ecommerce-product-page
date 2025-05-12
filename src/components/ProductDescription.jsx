import QuantitySelector from "./QuantitySelector";

function ProductDescription() {
  return (
    <section className="space-y-4 w-[350px]">
      <h3 className="uppercase font-semibold text-grayishBlue tracking-wide">
        Sneaker Company
      </h3>

      <h1 className="text-3xl font-black leading-tight">
        Fall Limited Edition Sneakers
      </h1>

      <p className="text-md text-grayishBlue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything
        weather can offer.
      </p>

      <div className="flex items-center space-x-4">
        <p className="font-black text-lg">$125.00</p>
        <span className="rounded-md bg-black text-white py-1 px-2 text-sm">
          50%
        </span>
      </div>

      <p className="text-grayishBlue line-through">$250.00</p>

      <QuantitySelector />
    </section>
  );
}

export default ProductDescription;
