"use client";

import { useState } from "react";
import { MenuCategory } from "@/types";
import { useLanguage } from "@/context/LanguageContext";

const MenuSection = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(
    MenuCategory.MAINS,
  );

  const filteredItems = t.menu.items.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section
      id="menu"
      className="py-32 px-6 md:px-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl serif">{t.menu.title}</h2>
          <div className="flex justify-center space-x-12 pt-8">
            {Object.values(MenuCategory).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-300 pb-2 border-b ${activeCategory === cat ? "text-white border-white" : "text-zinc-400 border-transparent hover:text-zinc-200"}`}
              >
                {t.menu.categories[cat as keyof typeof t.menu.categories] ??
                  cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl serif tracking-wide group-hover:text-zinc-400 transition-colors">
                  {item.name}
                </h3>
                <span className="text-sm font-light text-zinc-400">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm italic">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-12">
          <p className="text-xs text-zinc-400 uppercase tracking-widest">
            {t.menu.tasting}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
