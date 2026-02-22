"use client";

import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 md:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <span className="text-xs uppercase tracking-[0.5em] text-zinc-500">
          {t.about.tagline}
        </span>
        <h2 className="text-4xl md:text-6xl serif italic">{t.about.title}</h2>
        <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
          {t.about.description}
        </p>
        <div className="pt-8">
          <div className="h-px w-24 bg-white mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
