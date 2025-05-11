import imgProd1 from "../assets/images/image-product-1.jpg";
import imgProd1Thumb from "../assets/images/image-product-1-thumbnail.jpg";
import imgProd2 from "../assets/images/image-product-2.jpg";
import imgProd2Thumb from "../assets/images/image-product-2-thumbnail.jpg";
import imgProd3 from "../assets/images/image-product-3.jpg";
import imgProd3Thumb from "../assets/images/image-product-3-thumbnail.jpg";
import imgProd4 from "../assets/images/image-product-4.jpg";
import imgProd4Thumb from "../assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";

const images = [
 { full: imgProd1, thumb: imgProd1Thumb },
 { full: imgProd2, thumb: imgProd2Thumb },
 { full: imgProd3, thumb: imgProd3Thumb },
 { full: imgProd4, thumb: imgProd4Thumb },
]

function ProductGallery() {
 const [selectedImage, setSelectedImage] = useState(images[0].full)
 

 return (
   <div className="max-w-md">
     <div className="mb-4">
       <img src={selectedImage} alt="product image" className="rounded-xl"/>
     </div>
     <div className="flex justify-between gap-4">
       {images.map((image, index) => (
         <div
           key={index}
           onClick={() => setSelectedImage(image.full)}
           className={`
        w-20 h-20 rounded-xl border-2 cursor-pointer overflow-hidden
        ${selectedImage === image.full ? "border-orange" : "border-transparent"}
     
      `}
         >
           <img
             src={image.thumb}
             alt={`Thumbnail ${index + 1}`}
             className={`
          w-full h-full object-cover
          ${selectedImage === image.full ? "opacity-30" : ""}
          hover:opacity-30
          transition-opacity duration-200
        `}
           />
         </div>
       ))}
     </div>
   </div>
 );
}

export default ProductGallery;
