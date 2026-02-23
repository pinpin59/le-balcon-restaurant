"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigation principale"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 ${scrolled || mobileMenuOpen ? "py-4 bg-black/95 backdrop-blur-md border-b border-zinc-800" : "py-8 bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-12">
            <a
              href="#about"
              className="text-[10px] uppercase tracking-[0.4em] text-white hover:text-zinc-400 transition-colors"
            >
              {t.navbar.concept}
            </a>
            <a
              href="#menu"
              className="text-[10px] uppercase tracking-[0.4em] text-white hover:text-zinc-400 transition-colors"
            >
              {t.navbar.menu}
            </a>
          </div>

          <Link
            href="/"
            className="text-2xl md:text-3xl tracking-[0.2em] serif font-medium"
          >
            {t.navbar.title}
          </Link>

          <div className="flex items-center space-x-6 md:space-x-8">
            <a
              href="#reservation"
              className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-white hover:text-zinc-400 transition-colors border-b border-white pb-1"
            >
              {t.navbar.reservation}
            </a>

            {/* Bouton de langue */}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              aria-label={
                lang === "fr" ? "Switch to English" : "Passer en français"
              }
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors border border-zinc-700 hover:border-white px-2 py-1"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden text-white focus:outline-none z-50"
              aria-label={
                mobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={24} strokeWidth={1} />
              ) : (
                <Menu size={24} strokeWidth={1} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
            aria-modal="true"
            role="dialog"
          >
            <div className="flex flex-col space-y-8 items-center justify-center h-full pb-24">
              {[
                { label: t.navbar.concept, href: "#about" },
                { label: t.navbar.menu, href: "#menu" },
                { label: t.navbar.reservation, href: "#reservation" },
              ].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-2xl uppercase tracking-[0.3em] serif text-white hover:text-zinc-400 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-12 flex flex-col items-center space-y-4">
                <button
                  onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                  className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors border border-zinc-700 hover:border-white px-2 py-1"
                >
                  {lang === "fr" ? "EN" : "FR"}
                </button>
              </div>
              <div className="pt-12 flex flex-col items-center space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                  {t.navbar.contact}
                </p>
                <p className="text-sm tracking-widest text-zinc-300">
                  {t.navbar.mobile}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
