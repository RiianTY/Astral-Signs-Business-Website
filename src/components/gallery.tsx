// App.js or GalleryComponent.js
// Assuming Tailwind CSS is set up in your React project.
// If not, install tailwindcss, postcss, autoprefixer, and configure tailwind.config.js accordingly.
// Add the following to your index.css: @tailwind base; @tailwind components; @tailwind utilities;

import { useState } from "react";
import images, { GalleryImage } from "./assets/galleryImages";

// const [galleryFilter, setGalleryFilter] = useState<string>("All");

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : 0
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : 0
    );
  };

  return (
    <div className="p-4">
      // Temp images
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img: GalleryImage, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            id={img.id}
            className="w-full h-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow"
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-[#000000e6] flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
          >
            &times;
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl font-bold hover:text-gray-300"
          >
            &lt;
          </button>
          <img
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl font-bold hover:text-gray-300"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
