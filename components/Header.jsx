"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  // Scroll durumuna göre header arka planını optimize et (Mobilde ağır blur'u kaldırdık)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    setIsOpen(false);
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-cb-black/90 border-b border-cb-cyan/20" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-blender text-2xl tracking-widest text-white uppercase">
          NIGHT <span className="text-cb-cyan">UNLIMITED</span>
        </Link>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center gap-8 font-oswald text-sm tracking-widest uppercase text-gray-300">
          <Link href="/" className="hover:text-cb-cyan transition-colors">Anasayfa</Link>
          <a href="#urunler" onClick={(e) => handleNavClick(e, "urunler")} className="hover:text-cb-cyan transition-colors">Ürünler</a>
          <a href="#hakkimizda" onClick={(e) => handleNavClick(e, "hakkimizda")} className="hover:text-cb-cyan transition-colors">Hakkımızda</a>
          <a href="#iletisim" onClick={(e) => handleNavClick(e, "iletisim")} className="hover:text-cb-cyan transition-colors">İletişim</a>
        </nav>

        {/* Mobil Hamburger Butonu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cb-cyan focus:outline-none p-2"
          aria-label="Menüyü Aç"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-cb-cyan transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-full bg-cb-cyan transition-opacity ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-cb-cyan transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobil Açılır Menü (Hardware-accelerated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-cb-black border-b border-cb-cyan/30 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-white font-oswald tracking-widest text-lg uppercase hover:text-cb-cyan transition-colors"
            >
              Anasayfa
            </Link>
            <a
              href="#urunler"
              onClick={(e) => handleNavClick(e, "urunler")}
              className="text-white font-oswald tracking-widest text-lg uppercase hover:text-cb-cyan transition-colors"
            >
              Ürünler
            </a>
            <a
              href="#hakkimizda"
              onClick={(e) => handleNavClick(e, "hakkimizda")}
              className="text-white font-oswald tracking-widest text-lg uppercase hover:text-cb-cyan transition-colors"
            >
              Hakkımızda
            </a>
            <a
              href="#iletisim"
              onClick={(e) => handleNavClick(e, "iletisim")}
              className="text-white font-oswald tracking-widest text-lg uppercase hover:text-cb-cyan transition-colors"
            >
              İletişim
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}