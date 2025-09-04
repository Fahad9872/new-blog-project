"use client";
import { useState } from "react";

export default function PhotoGallery() {
  // Example images (replace with your own online URLs)
  const allImages = [
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
    "https://www.rishabhsoft.com/wp-content/uploads/2025/01/IMG_20211028_164537.jpg",
  ];

  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <section className="py-10 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Photo Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {allImages.slice(0, visibleCount).map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-sm cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-40 md:h-48 lg:h-52 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allImages.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-[90%]">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
