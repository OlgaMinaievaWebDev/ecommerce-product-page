import { useState } from "react";
import cart from "../assets/images/icon-cart.svg";
import { useCart } from "../context/CartContext";

function QuantitySelector({ product }) {
  const [quantity, setQuantity] = useState(1); // Start from 1
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
      setQuantity(1); // Reset to 1
      console.log("Added to cart:", product, quantity);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="bg-lightGrayishBlue flex items-center justify-between px-4 rounded-md">
        <button
          className="p-2 text-orange text-xl font-bold cursor-pointer"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
        >
          -
        </button>
        <span className="px-4 text-lg font-semibold">{quantity}</span>
        <button
          className="p-2 text-orange text-xl font-bold cursor-pointer"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button
        className="bg-orange text-black px-10 py-3 rounded-md shadow-md hover:opacity-70 transition-all flex gap-2 items-center font-semibold cursor-pointer"
        onClick={handleAddToCart}
      >
        <img src={cart} alt="cart logo" className="w-4 h-4" />
        Add to cart
      </button>
    </div>
  );
}

export default QuantitySelector;
