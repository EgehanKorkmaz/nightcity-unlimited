"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { cn } from "@/lib/utils";

export function Categories() {
    const categories = [
        {
            title: "İç Mekan",
            desc: "Kapalı alanlar için optimize edilmiş, yüksek çözünürlüklü LED çözümleri.",
            slug: "ic-mekan",
            colors: [[0, 240, 255]],
        },
        {
            title: "Dış Mekan",
            desc: "Zorlu hava koşullarına dayanıklı, ultra parlak dev ekranlar.",
            slug: "dis-mekan",
            colors: [[252, 238, 10]],
        },
        {
            title: "Stadyum",
            desc: "Devasa kitleler için sıfır gecikmeli, modüler skorboard ve çevre ekranları.",
            slug: "stadyum",
            colors: [[206, 43, 47]],
        },
        {
            title: "Özel Üretim",
            desc: "Mimari projelere özgü, asimetrik ve kıvrımlı siberpunk vizyonlar.",
            slug: "ozel",
            colors: [[0, 240, 255], [252, 238, 10]],
        },
    ];

    return (
        <section id="urunler" className="w-full py-20 bg-cb-black relative z-10 border-t border-cb-cyan/30">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-blender text-white text-center mb-12 tracking-widest uppercase">
                    Sistem <span className="text-cb-cyan">Kategorileri</span>
                </h2>

                {/* Mobilde köşe artılarının çakışmaması için dikey gap artırıldı */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.slug} category={cat} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const CategoryCard = ({ category }) => {
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <Link
            href={`/urunler?kategori=${category.slug}`}
            prefetch={false}
            onMouseEnter={() => !isMobile && setHovered(true)}
            onMouseLeave={() => !isMobile && setHovered(false)}
            /* overflow-visible eklendi: dışarı taşan köşe artılarının kırpılmasını önler */
            className="border border-cb-cyan/20 group/canvas-card flex flex-col items-center justify-center bg-cb-black/80 lg:bg-cb-black/50 hover:bg-cb-black w-full h-24 lg:h-[32rem] p-4 relative overflow-visible cursor-pointer transition-all duration-300 hover:border-cb-cyan"
        >
            {/* Köşe Süslemeleri (+ İşaretleri) */}
            <CornerIcon className="absolute h-4 w-4 lg:h-6 lg:w-6 -top-2 -left-2 lg:-top-3 lg:-left-3 text-cb-cyan opacity-60 z-30" />
            <CornerIcon className="absolute h-4 w-4 lg:h-6 lg:w-6 -bottom-2 -left-2 lg:-bottom-3 lg:-left-3 text-cb-cyan opacity-60 z-30" />
            <CornerIcon className="absolute h-4 w-4 lg:h-6 lg:w-6 -top-2 -right-2 lg:-top-3 lg:-right-3 text-cb-cyan opacity-60 z-30" />
            <CornerIcon className="absolute h-4 w-4 lg:h-6 lg:w-6 -bottom-2 -right-2 lg:-bottom-3 lg:-right-3 text-cb-cyan opacity-60 z-30" />

            {/* Sadece Desktop'ta ve Hover anında Canvas Efekti */}
            <AnimatePresence>
                {hovered && !isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 h-full w-full z-0"
                    >
                        <CanvasRevealEffect
                            animationSpeed={3}
                            containerClassName="bg-transparent"
                            colors={category.colors}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center lg:group-hover/canvas-card:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl lg:text-4xl font-blender text-white tracking-widest uppercase">
                        {category.title}
                    </h3>
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center opacity-0 group-hover/canvas-card:opacity-100 transition-all duration-300 translate-y-4 group-hover/canvas-card:translate-y-0">
                    <h2 className="text-5xl font-blender tracking-wider uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
                        {category.title}
                    </h2>

                    <p className="text-lg font-inter font-medium text-white mt-4 drop-shadow-[0_4px_4px_rgba(0,0,0,1)] leading-relaxed max-w-md">
                        {category.desc}
                    </p>

                    <span className="mt-8 bg-cb-cyan text-cb-black font-oswald font-bold tracking-widest uppercase text-base px-8 py-2 shadow-[0_0_15px_rgba(0,240,255,0.6)] group-hover/canvas-card:scale-105 transition-transform duration-300">
                        ÜRÜNLER
                    </span>
                </div>
            </div>
        </Link>
    );
};

// Basit köşe ikonu (Artı işareti)
const CornerIcon = ({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};