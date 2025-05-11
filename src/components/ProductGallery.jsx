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
    <img src={selectedImage} alt="product image" />
   </div>
   <div className="flex justify-between">
    {images.map((image, index) => (
     <img src={image.thumb} key={index} className="w-20 h-20 rounded-xl " />
    ))}
   </div>
   </div>
  )
}

export default ProductGallery;
