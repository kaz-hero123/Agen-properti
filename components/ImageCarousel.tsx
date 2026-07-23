"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  title: string;
  onImageClick?: () => void;
}

export default function ImageCarousel({ images, title, onImageClick }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.offsetWidth;
      const index = Math.round(scrollPosition / width);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const width = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden group">
      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
        onScroll={handleScroll}
        onClick={onImageClick}
      >
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-full shrink-0 snap-center cursor-pointer">
            <Image
              src={src}
              alt={`${title} - foto ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                scrollTo(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === idx ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Overlay gradient at bottom for contrast with dots */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
}
