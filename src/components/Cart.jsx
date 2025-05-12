import { createPortal } from "react-dom";


function Cart() {
 
 return createPortal(
   <div className="w-[320px] bg-red-600 rounded-lg shadow-lg p-4">
     <h1>i am cart</h1>
  </div>,
  document.body
 );
}

export default Cart
