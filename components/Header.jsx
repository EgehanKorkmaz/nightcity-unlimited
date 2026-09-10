"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// 1. Next.js router kancalarını ekliyoruz
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/MovingBorders";

export function Header({ hideLinks = false }) {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  // Scrollspy: Hangi bölümde olduğumuzu takip eden IntersectionObserver
  useEffect(() => {
    const sectionIds = ["urunler", "biz-kimiz", "iletisim"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) setActiveLink("");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkStyle = (linkName) => {
    return `transition-colors duration-300 cursor-pointer ${activeLink === linkName ? "text-cb-yellow" : "text-cb-cyan hover:text-white"
      }`;
  };

  // 2. Tıklanan linki ve sayfayı kontrol eden kesin kaydırma (scroll) fonksiyonu
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (pathname === "/") {
      // Eğer ana sayfadaysak doğrudan hedef ID'ye kay (Smooth Scroll)
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Eğer başka sayfadaysak (örn: ürünler), ana sayfaya ve ilgili ID'ye yönlendir
      router.push(`/#${targetId}`);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-cb-black/20 backdrop-blur-[2px]">

      <Link href="/" onClick={() => setActiveLink("")} className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300">
        <img src="/logo.png" alt="Night Unlimited" className="h-24 md:h-28 object-contain" />
      </Link>

      {!hideLinks && (
        <nav className="hidden md:flex gap-8 font-inter uppercase text-sm tracking-widest">
          {/* 3. Linkleri <span>'a çevirip onClick ile handleNavClick'e bağlıyoruz */}
          <span onClick={(e) => handleNavClick(e, "urunler")} className={getLinkStyle("urunler")}>
            Ürünler
          </span>
          <span onClick={(e) => handleNavClick(e, "biz-kimiz")} className={getLinkStyle("biz-kimiz")}>
            Biz Kimiz
          </span>
          <span onClick={(e) => handleNavClick(e, "iletisim")} className={getLinkStyle("iletisim")}>
            İletişim
          </span>
        </nav>
      )}

      <div className="hidden md:block">
        {/* Teklif al butonu da aynı fonksiyonla koruma altına alındı */}
        <div onClick={(e) => handleNavClick(e, "iletisim")} className="cursor-pointer">
          <Button
            duration={3000}
            className="px-8 py-2 font-blender text-xl tracking-widest uppercase bg-cb-black/80 hover:bg-cb-yellow hover:text-cb-black hover:shadow-[0_0_20px_rgba(252,238,10,0.8)] transition-all duration-300"
          >
            Teklif Al
          </Button>
        </div>
      </div>
    </header>
  );
}