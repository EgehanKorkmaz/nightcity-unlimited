"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";

export function Header({ hideLinks = false }) {
  // Aktif linki takip etmek için state (varsayılan boş)
  const [activeLink, setActiveLink] = useState("");

  // Linklerin hem hover (beyaz) hem aktif (sarı) durumunu yöneten fonksiyon
  const getLinkStyle = (linkName) => {
    return `transition-colors duration-300 ${activeLink === linkName ? "text-cb-yellow" : "text-cb-cyan hover:text-white"
      }`;
  };

  return (
    <header className="absolute top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-cb-black/40 backdrop-blur-sm">

      {/* Logoya tıklandığında aktif link sıfırlanır */}
      <Link href="/" onClick={() => setActiveLink("")} className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300">
        <img src="/logo.png" alt="Night Unlimited" className="h-24 md:h-28 object-contain" />
      </Link>

      {!hideLinks && (
        <nav className="hidden md:flex gap-8 font-inter uppercase text-sm tracking-widest">
          <Link href="/#urunler" onClick={() => setActiveLink("urunler")} className={getLinkStyle("urunler")}>
            Ürünler
          </Link>
          <Link href="/#biz-kimiz" onClick={() => setActiveLink("biz-kimiz")} className={getLinkStyle("biz-kimiz")}>
            Biz Kimiz
          </Link>
          <Link href="/#iletisim" onClick={() => setActiveLink("iletisim")} className={getLinkStyle("iletisim")}>
            İletişim
          </Link>
        </nav>
      )}

      <div className="hidden md:block">
        <Link href="/#iletisim" onClick={() => setActiveLink("iletisim")}>
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