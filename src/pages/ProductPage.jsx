import ProductDescription from "../components/ProductDescription";
import ProductGallery from "../components/ProductGallery";


function ProductPage() {
 return (
   <div className="p-12 flex items-center justify-center mx-auto gap-40">
     <div className="w-1/2">
       <ProductGallery />
     </div>

     <div className="w-1/2">
       <ProductDescription />
     </div>
   </div>
 );
}

export default ProductPage
