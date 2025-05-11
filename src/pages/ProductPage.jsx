import ProductGallery from "../components/ProductGallery";

function ProductPage() {
 return (
   <div className="p-12 flex gap-12 items-center">
     <div className="flex-1/2 ">
      <ProductGallery/>
     </div>
     <div className="flex-1/2">
    <div>description</div>
    <div>quantity</div>
     </div>
   </div>
 );
}

export default ProductPage
