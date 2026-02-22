"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      role="navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 ${scrolled ? "py-4 bg-black/90 backdrop-blur-md border-b border-zinc-800" : "py-8 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-12">
          <a
            href="#about"
            className="text-[10px] uppercase tracking-[0.4em] text-white hover:text-zinc-400 transition-colors"
          >
            Le Concept
          </a>
          <a
            href="#menu"
            className="text-[10px] uppercase tracking-[0.4em] text-white hover:text-zinc-400 transition-colors"
          >
            Carte
          </a>
        </div>

        <Link
          href="/"
          className="text-2xl md:text-3xl tracking-[0.2em] serif font-medium"
        >
          LE BALCON
        </Link>

        <div className="flex items-center space-x-12">
          <a
            href="#reservation"
            className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-white hover:text-zinc-400 transition-colors border-b border-white pb-1"
          >
            Réservation
          </a>
          <button
            className="md:hidden"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 8h16M4 16h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu mobile accessible */}
        {mobileMenuOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-10 right-10 text-white text-2xl"
              aria-label="Fermer le menu"
            >
              &times;
            </button>
            <ul className="space-y-8">
              <li>
                <a
                  href="#about"
                  className="text-xl text-white"
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  Le Concept
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-xl text-white"
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  Carte
                </a>
              </li>
              <li>
                <a
                  href="#reservation"
                  className="text-xl text-white"
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  Réservation
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
