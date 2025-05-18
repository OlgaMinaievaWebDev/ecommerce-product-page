import { createPortal } from "react-dom";
import imgProd1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import trashIcon from "../assets/images/icon-delete.svg";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, clearCart, totalQuantity } = useCart();

 const orderComplete =()=>{
  alert("Your order is complete")
  clearCart()
 }

  return createPortal(
    <aside
      aria-label="Shopping cart"
      className="w-[350px] rounded-lg shadow-lg fixed top-20 right-20 z-10 bg-white"
    >
      <h1 className="border-b border-grayishBlue font-semibold px-9 py-2 ">
        Cart
      </h1>

      {totalQuantity > 0 ? (
        <>
          <div className="flex items-center justify-center gap-4 p-4">
            {cartItems.map(({ product, quantity }, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={imgProd1Thumb}
                  alt={product.name}
                  className="w-14 h-14 rounded"
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-700">{product.name}</p>
                  <p className="text-grayishBlue">
                    ${product.price.toFixed(2)} × {quantity}{" "}
                    <span className="font-bold text-black">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            ))}
            <button
              onClick={clearCart}
              className=" hover:opacity-70 transition-opacity duration-200"
              title="Remove all"
            >
              <img src={trashIcon} alt="trash icon" className="w-4 h-4" />
            </button>
          </div>

          <button
          onClick={orderComplete}
          className="bg-orange text-black px-10 py-3 rounded-md shadow-md hover:opacity-70 transition-all font-semibold cursor-pointer w-4/5 mx-auto mb-4 flex justify-center items-center">
  Checkout
</button>
        </>
      ) : (
        <p className="p-4 text-grayishBlue text-sm text-center">
          Your cart is empty.
        </p>
      )}
    </aside>,
    document.body
  );
}

export default Cart;
