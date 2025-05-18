import { createPortal } from "react-dom";
import { useState } from "react";
import prevIcon from "../assets/images/icon-previous.svg";
import nextIcon from "../assets/images/icon-next.svg";
import imgProd1 from "../assets/images/image-product-1.jpg";
import imgProd2 from "../assets/images/image-product-2.jpg";
import imgProd3 from "../assets/images/image-product-3.jpg";
import imgProd4 from "../assets/images/image-product-4.jpg";

const images = [imgProd1, imgProd2, imgProd3, imgProd4];

function Lightbox({ imageSrc, onClose }) {
  const modalRoot = document.getElementById("modal-root");
  const initialIndex = images.findIndex((img) => img === imageSrc);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return modalRoot
    ? createPortal(
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // prevent modal from closing
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white text-4xl font-bold"
            >
              ×
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-[-1.2rem] top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center p-2 shadow"
            >
              <img src={prevIcon} alt="previous" />
            </button>

            {/* Image */}
            <img
              src={images[currentIndex]}
              alt="Lightbox enlarged"
              className="max-w-[500px] max-h-[65vh] object-contain rounded-2xl shadow-lg"
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-[-1.2rem] top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center items-center p-2 shadow"
            >
              <img src={nextIcon} alt="next" />
            </button>
          </div>
        </div>,
        modalRoot
      )
    : null;
}

export default Lightbox;
