import ProductGallery from "../components/ProductGallery";
import QuantitySelector from "../components/QuantitySelector";

function ProductPage() {
 return (
   <div className="p-12 flex gap-12 items-center">
     <div className="flex-1/2 ">
      <ProductGallery/>
     </div>
     <div className="flex-1/2">
 <QuantitySelector/>
     </div>
   </div>
 );
}

export default ProductPage
