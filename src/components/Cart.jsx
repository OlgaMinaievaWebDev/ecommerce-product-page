import { createPortal } from "react-dom";


function Cart() {
 
 return createPortal(
   <div className="w-[320px] rounded-lg shadow-lg p-4  fixed top-20 right-20 flex flex-col">
   <h1>Cart</h1>
   <div>
    product
   </div>
  </div>,
  document.body
 );
}

export default Cart
