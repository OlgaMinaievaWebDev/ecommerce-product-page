import { createPortal } from "react-dom";
import { product } from "../data/productData";
import imgProd1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import { useCart } from "../context/CartContext";

function Cart() {
 const {totalQuantity} = useCart()
 const total = product.price * totalQuantity;
 
 return createPortal(
   <div className="w-[320px] h-[150px] rounded-lg shadow-lg  fixed top-18 right-20 flex flex-col z-10 bg-white">
   <h1 className="border-b border-grayishBlue font-semibold px-4 py-2">Cart</h1>
   <div>
    <img src={imgProd1Thumb} alt={product.name} className="w-16" />
    <p>{product.name}</p>
    <p>{product.price} x {totalQuantity}</p> 
    <p>{ total}</p>
   </div>
  </div>,
  document.body
 );
}

export default Cart
