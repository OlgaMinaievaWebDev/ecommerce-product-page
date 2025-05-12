import { useState } from 'react';
import cart from '../assets/images/icon-cart.svg'

function QuantitySelector() {
 const [quantity, setQuantity] = useState(0)

  return (
    <div className="flex gap-4 items-center">
      <div className="bg-lightGrayishBlue flex items-center justify-between px-4 rounded-md">
        <button
          className="p-2 text-orange text-xl font-bold"
          onClick={() => setQuantity((prev) => Math.max(0, prev - 1))}
        >
          -
        </button>
     <span className="px-4 text-lg font-semibold">{quantity }</span>
        <button
          className="p-2 text-orange text-xl font-bold"
          onClick={() => {
            setQuantity(prev=> prev+ 1);
          }}
        >
          +
        </button>
      </div>
      <button className="bg-orange text-black px-10 py-3 rounded-md shadow-md hover:bg-orange-600 transition-all flex gap-2 items-center font-semibold">
        <img src={cart} alt="cart logo" className="w-4 h-4 cursor-pointer" />{" "}
        Add to cart
      </button>
    </div>
  );
}
export default QuantitySelector