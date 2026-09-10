"use client";
import React from "react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section id="biz-kimiz" className="w-full py-24 bg-cb-black relative z-10 border-t border-cb-cyan/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Sol Alan: Video Paneli */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full aspect-video md:aspect-[4/3] border border-cb-cyan/20 p-2 bg-cb-black/80 shadow-[0_0_30px_rgba(0,240,255,0.05)] group"
                >
                    {/* Siberpunk Köşe Süslemeleri */}
                    <CornerIcon className="absolute h-6 w-6 -top-3 -left-3 text-cb-cyan opacity-50 transition-opacity group-hover:opacity-100" />
                    <CornerIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-cb-cyan opacity-50 transition-opacity group-hover:opacity-100" />
                    <CornerIcon className="absolute h-6 w-6 -top-3 -right-3 text-cb-cyan opacity-50 transition-opacity group-hover:opacity-100" />
                    <CornerIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-cb-cyan opacity-50 transition-opacity group-hover:opacity-100" />

                    {/* Arka Plan Videosu Loop */}
                    <video
                        src="/Night Unlimited LED Ekran ve Görüntü Sistemleri.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover filter contrast-125 saturate-50 brightness-75 group-hover:filter-none transition-all duration-700"
                    />
                    {/* Video Üstü Tarama Çizgileri */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-30 z-10" />
                </motion.div>

                {/* Sağ Alan: Metin ve İçerik */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-oswald text-cb-cyan tracking-[0.2em] uppercase">
                            Night Unlimited Kimdir?
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-blender text-white tracking-widest uppercase leading-none">
                            Görüntünün <br /><span className="text-gray-500">Geleceğini</span> İnşa Ediyoruz
                        </h2>
                    </div>

                    <div className="h-px w-1/3 bg-gradient-to-r from-cb-cyan to-transparent my-2" />

                    <p className="text-base md:text-lg font-inter text-gray-400 leading-relaxed text-justify">
                        Sınırları ortadan kaldıran yüksek çözünürlüklü LED teknolojileriyle, sıradan mekanları dijital başyapıtlara dönüştürüyoruz. Klasik ekran standartlarını reddeden mühendislik yaklaşımımızla, iç ve dış mekanlarda görsel bir devrim yaratıyoruz.
                    </p>
                    <p className="text-base md:text-lg font-inter text-gray-400 leading-relaxed text-justify">
                        Projeye özel esnek modüller, stadyumlar için sıfır gecikmeli devasa paneller ve mimari hatlara uyum sağlayan transparan ekranlarımızla; sadece bir görüntü sistemi değil, tamamen içine çeken bir deneyim sunuyoruz.
                    </p>

                    {/* Veri Blokları */}
                    <div className="mt-4 flex gap-8">
                        <div className="border-l-2 border-cb-cyan pl-4">
                            <p className="text-4xl font-blender text-white">10<span className="text-cb-cyan">+</span></p>
                            <p className="text-xs font-oswald text-gray-500 uppercase tracking-widest mt-1">Yıllık Ar-Ge</p>
                        </div>
                        <div className="border-l-2 border-cb-yellow pl-4">
                            <p className="text-4xl font-blender text-white">500<span className="text-cb-yellow">+</span></p>
                            <p className="text-xs font-oswald text-gray-500 uppercase tracking-widest mt-1">Global Proje</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

// Kartlardaki aynı köşe ikonu
const CornerIcon = ({ className, ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
);