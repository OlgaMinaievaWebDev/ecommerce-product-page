import { createPortal } from "react-dom";
import { product } from "../data/productData";

function Cart() {
 
 return createPortal(
   <div className="w-[320px] h-[150px] rounded-lg shadow-lg  fixed top-18 right-20 flex flex-col z-10 bg-white">
   <h1 className="border-b border-grayishBlue font-semibold px-4 py-2">Cart</h1>
   <div>

   </div>
  </div>,
  document.body
 );
}

export default Cart
