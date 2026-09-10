import React from "react";
import { Button } from "./ui/MovingBorders";

export function Header() {
  return (
    <header className="absolute top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-cb-black/20 backdrop-blur-xs">

      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Night Unlimited" className="h-24 md:h-28 object-contain" />
      </div>

      <nav className="hidden md:flex gap-8 text-cb-cyan font-inter uppercase text-sm tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Ürün Ekosistemi</a>
        <a href="#" className="hover:text-white transition-colors">Ürünler</a>
        <a href="#" className="hover:text-white transition-colors">Hakkımızda</a>
        <a href="#" className="hover:text-white transition-colors">Hizmetler</a>
      </nav>

      <div className="hidden md:block">
        <Button
          duration={3000}
          className="px-8 py-2 font-blender text-xl tracking-widest uppercase bg-cb-black/80 hover:bg-cb-cyan hover:text-cb-black hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300"
        >
          Teklif Al
        </Button>
      </div>
    </header>
  );
}