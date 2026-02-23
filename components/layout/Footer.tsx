"use client";

import { useLanguage } from "@/context/LanguageContext";
import MapEmbed from "../features/MapEmbed";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-20 px-6 border-t border-zinc-900 text-center">
      <div className="space-y-6">
        <h3 className="text-3xl serif italic">Le Balcon</h3>
        <p className="text-zinc-400 text-sm tracking-widest uppercase">
          {t.footer.address}
        </p>
        <MapEmbed />

        <div className="flex justify-center space-x-8 text-zinc-400 text-xs tracking-widest uppercase py-4">
          <a href="#" className="hover:text-white transition-colors">
            {t.footer.instagram}
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {t.footer.facebook}
          </a>
          <a href="#" className="hover:text-white transition-colors">
            {t.footer.press}
          </a>
        </div>
        <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
