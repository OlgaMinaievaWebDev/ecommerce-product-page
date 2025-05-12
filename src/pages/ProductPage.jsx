import ProductDescription from "../components/ProductDescription";
import ProductGallery from "../components/ProductGallery";
import { CartProvider } from "../context/CartContext";

function ProductPage() {
 return (
   <div className="p-12 flex gap-12 items-center">
     <div className="flex-1/2 ">
      <ProductGallery/>
     </div>
     <CartProvider>
       
   <div className="flex-1/2">
    <ProductDescription/>

     </div>
     </CartProvider>
   </div>
 );
}

export default ProductPage
