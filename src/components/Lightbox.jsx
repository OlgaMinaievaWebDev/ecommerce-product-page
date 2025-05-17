import { createPortal } from "react-dom";

function Lightbox({ imageSrc, onClose }) {
  const modalRoot = document.getElementById("modal-root");

  return modalRoot
    ? createPortal(
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ×
          </button>

          <img
            src={imageSrc}
            alt="Lightbox enlarged view"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
        </div>,
        modalRoot
      )
    : null;
}

export default Lightbox;
