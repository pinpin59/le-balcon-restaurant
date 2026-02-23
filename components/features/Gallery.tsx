"use client";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

const Gallery = () => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-y-0 md:h-[80vh] bg-black w-full">
      <div className="relative group overflow-hidden border-r border-zinc-900 h-[25vh] md:h-full">
        <Image
          src="/images/place.webp"
          alt="Gastronomy 1"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs uppercase tracking-[0.5em] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {t.gallery.place}
          </span>
        </div>
      </div>
      <div className="relative group overflow-hidden border-r border-zinc-900 h-[25vh] md:h-full">
        <Image
          src="/images/gesture.webp"
          alt="Gastronomy 2"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs uppercase tracking-[0.5em] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {t.gallery.gesture}
          </span>
        </div>
      </div>
      <div className="relative group overflow-hidden h-[25vh] md:h-full">
        <Image
          src="/images/material.webp"
          alt="Gastronomy 3"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-xs uppercase tracking-[0.5em] opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {t.gallery.material}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
