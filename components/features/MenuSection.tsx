"use client";

import { useState } from "react";
import { MenuCategory } from "@/types";
import { MENU_DATA } from "@/constants";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(
    MenuCategory.MAINS,
  );

  const filteredItems = MENU_DATA.filter(
    (item) => item.category === activeCategory,
  );

  return (
    <section
      id="menu"
      className="py-32 px-6 md:px-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-5xl mx-auto space-y-24">
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-7xl serif">La Carte</h2>
          <div className="flex justify-center space-x-12 pt-8">
            {Object.values(MenuCategory).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-300 pb-2 border-b ${activeCategory === cat ? "text-white border-white" : "text-zinc-500 border-transparent hover:text-zinc-300"}`}
              >
                {cat}
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
              <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm italic">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-12">
          <p className="text-xs text-zinc-600 uppercase tracking-widest">
            Menu de dégustation disponible en 7 services — 185€
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
