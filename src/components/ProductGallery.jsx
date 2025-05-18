import { useState } from "react";
import Lightbox from "./Lightbox";
import imgProd1 from "../assets/images/image-product-1.jpg";
import imgProd2 from "../assets/images/image-product-2.jpg";
import imgProd3 from "../assets/images/image-product-3.jpg";
import imgProd4 from "../assets/images/image-product-4.jpg";

const images = [imgProd1, imgProd2, imgProd3, imgProd4];

function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Main Image */}
      <img
        src={selectedImage}
        alt="Main product"
        className="w-[400px] h-[400px] object-cover rounded-lg cursor-pointer"
        onClick={() => setLightboxOpen(true)}
      />

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 hover:opacity-50  ${
              selectedImage === img ? "border-orange-500" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          imageSrc={selectedImage}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}

export default ProductGallery;
