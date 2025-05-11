import ProductDescription from "../components/ProductDescription";
import ProductGallery from "../components/ProductGallery";


function ProductPage() {
 return (
   <div className="p-12 flex gap-12 items-center">
     <div className="flex-1/2 ">
      <ProductGallery/>
     </div>
   <div className="flex-1/2">
    <ProductDescription/>

     </div>
   </div>
 );
}

export default ProductPage
