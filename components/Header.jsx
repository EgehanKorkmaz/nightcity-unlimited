"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";

export function Header({ hideLinks = false }) {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Sitedeki hangi bölümlerin (section) takip edileceği
    const sectionIds = ["urunler", "biz-kimiz", "iletisim"];

    // Intersection Observer ayarları
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Eğer bölüm ekranın belirlenen alanına girdiyse aktif yap
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        // Tetikleme alanı
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    // İlgili ID'ye sahip DOM elemanlarını bul
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Kullanıcı en tepeye çıktığında aktifliği temizle
    const handleScroll = () => {
      if (window.scrollY < 100) setActiveLink("");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Bileşen temizlendiğinde dinleyicileri kaldır (Memory Leak önlemi)
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkStyle = (linkName) => {
    return `transition-colors duration-300 ${activeLink === linkName ? "text-cb-yellow" : "text-cb-cyan hover:text-white"
      }`;
  };

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-cb-black/20 backdrop-blur-[2px]">

      <Link href="/" onClick={() => setActiveLink("")} className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300">
        <img src="/logo.png" alt="Night Unlimited" className="h-24 md:h-28 object-contain" />
      </Link>

      {!hideLinks && (
        <nav className="hidden md:flex gap-8 font-inter uppercase text-sm tracking-widest">
          <Link href="/#urunler" className={getLinkStyle("urunler")}>
            Ürünler
          </Link>
          <Link href="/#biz-kimiz" className={getLinkStyle("biz-kimiz")}>
            Biz Kimiz
          </Link>
          <Link href="/#iletisim" className={getLinkStyle("iletisim")}>
            İletişim
          </Link>
        </nav>
      )}

      <div className="hidden md:block">
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