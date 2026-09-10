import React from "react";
import Link from "next/link"; // Link bileşeni eklendi
import { Button } from "./ui/MovingBorders";

export function Header({ hideLinks = false }) {
  return (
    <header className="absolute top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-cb-black/40 backdrop-blur-sm">

      {/* Logo bir Link ile sarmalandı */}
      <Link href="/" className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300">
        <img src="/logo.png" alt="Night Unlimited" className="h-24 md:h-28 object-contain" />
      </Link>

      {!hideLinks && (
        <nav className="hidden md:flex gap-8 text-cb-cyan font-inter uppercase text-sm tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Ana Sayfa</a>
          <a href="#" className="hover:text-white transition-colors">Hakkımızda</a>
          <a href="#" className="hover:text-white transition-colors">İletişim</a>
        </nav>
      )}

      <div className="hidden md:block">
        {/* Buton Link ile sarmalandı ve hash routing eklendi */}
        <Link href="/#iletisim">
          <Button
            duration={3000}
            className="px-8 py-2 font-blender text-xl tracking-widest uppercase bg-cb-black/80 hover:bg-cb-yellow hover:text-cb-black hover:shadow-[0_0_20px_rgba(252,238,10,0.8)] transition-all duration-300"
          >
            Teklif Al
          </Button>
        </Link>
      </div>
    </header>
  );
}