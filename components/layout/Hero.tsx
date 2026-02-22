"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black"></div>

      {/* Atmospheric Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000"
        alt="Bar Atmosphere"
        fill
        className="object-cover opacity-40 mix-blend-luminosity grayscale"
        priority
      />

      <div className="relative z-20 text-center space-y-6 px-6">
        <span className="block text-xs md:text-sm uppercase tracking-[0.8em] text-zinc-400 animate-pulse">
          {t.hero.welcome}
        </span>
        <h1 className="text-7xl md:text-[12rem] leading-none serif tracking-tighter transition-transform duration-1000">
          <span className="block">{t.hero.purity}</span>
          <span className="block text-outline ml-12 md:ml-32">
            {t.hero.elegance}
          </span>
        </h1>
        <div className="pt-12">
          <a
            href="#reservation"
            className="inline-block border border-white/30 px-12 py-5 text-[10px] uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all duration-500"
          >
            {t.hero.discover}
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center space-y-4">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 rotate-90 origin-left">
            {t.hero.scroll}
          </span>
          <div className="h-12 w-px bg-zinc-800"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
