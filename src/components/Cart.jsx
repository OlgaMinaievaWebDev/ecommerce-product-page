import { createPortal } from "react-dom";
import { product } from "../data/productData";
import imgProd1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import trashIcon from "../assets/images/icon-delete.svg";
import { useCart } from "../context/CartContext";

function Cart() {
  const { totalQuantity, removeFromCart } = useCart(); // include removeFromCart
  const total = product.price * totalQuantity;

  return createPortal(
    <div className="w-[320px] rounded-lg shadow-lg fixed top-18 right-20 flex flex-col z-10 bg-white">
      <h1 className="border-b border-grayishBlue font-semibold px-4 py-2">
        Cart
      </h1>

      {totalQuantity > 0 ? (
        <>
          <div className="flex items-center p-4 gap-4">
            <img
              src={imgProd1Thumb}
              alt={product.name}
              className="w-14 h-14 rounded"
            />
            <div className="flex-1 text-sm">
              <p className="text-gray-700">{product.name}</p>
              <p className="text-grayishBlue">
                ${product.price.toFixed(2)} x {totalQuantity}{" "}
                <span className="font-bold text-black">
                  ${total.toFixed(2)}
                </span>
              </p>
            </div>
            <button
              onClick={removeFromCart}
              className="hover:opacity-70 transition-opacity duration-200"
              title="Remove from cart"
            >
              <img src={trashIcon} alt="trash icon" className="w-4 h-4" />
            </button>
          </div>

          <button className="bg-orange text-black px-10 py-3 rounded-md shadow-md hover:opacity-70 transition-all font-semibold cursor-pointer w-[70%] mx-auto mb-4 flex justify-center items-center text-center">
            Checkout
          </button>
        </>
      ) : (
        <p className="p-4 text-grayishBlue text-sm">
          Add products to your cart
        </p>
      )}
    </div>,
    document.body
  );
}

export default Cart;
