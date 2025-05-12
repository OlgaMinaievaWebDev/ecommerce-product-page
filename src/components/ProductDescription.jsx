import QuantitySelector from "./QuantitySelector"

function ProductDescription() {
 return (
   <section className="space-y-4 w-[350px]">
     <h3 className="uppercase font-semibold text-grayishBlue ">
       sneaker company
     </h3>
     <h1 className="text-3xl font-black">Fall Limited Edition Sneakers</h1>
     <p className="text-md text-grayishBlue ">
       These low-profile sneakers are your perfect casual wear
       companion.Featuring a durable rubber outer sole, they'll windstand
       everything weather can offer
     </p>
     <p className="font-black text-lg">
       $125.00
       <span className="rounded-md ml-4 bg-black text-white py-1 px-2 text-sm">
         50%
       </span>
     </p>
     <p className="text-grayishBlue line-through">$250.00</p>
     <QuantitySelector />
   </section>
 );
}

export default ProductDescription
