import { useState, useEffect } from "react";

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1516534775068-bb57cd175440?w=800&h=500&fit=crop",
    "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=500&fit=crop",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-2xl md:max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl mb-8 md:mb-12">
      <div className="relative h-48 sm:h-64 md:h-96 bg-gray-800">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-10 text-sm sm:text-base"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-10 text-sm sm:text-base"
      >
        ❯
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-6 sm:w-8 h-2 sm:h-3"
                : "bg-white/50 hover:bg-white/75 w-2 sm:w-3 h-2 sm:h-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
