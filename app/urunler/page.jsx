"use client";
import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Header } from "@/components/Header";
import { TiltCard } from "@/components/ui/3d-card";
import { motion } from "framer-motion";

const productsData = [
    // İç Mekan (4)
    { id: 1, name: "İç Mekan LED", category: "ic-mekan", img: "/icmekanled.webp" },
    { id: 2, name: "Poster LED", category: "ic-mekan", img: "/posterled.webp" },
    { id: 3, name: "Mağaza LED", category: "ic-mekan", img: "/magzaled.webp" },
    { id: 4, name: "Stüdyo LED", category: "ic-mekan", img: "/studyoled.webp" },
    // Dış Mekan (6)
    { id: 5, name: "Açık Hava LED", category: "dis-mekan", img: "/acikhavaled.webp" },
    { id: 6, name: "Bina Cephe LED", category: "dis-mekan", img: "/binacepheled.webp" },
    { id: 7, name: "Dış Mekan LED 2", category: "dis-mekan", img: "/dismekanled2.webp" },
    { id: 8, name: "Sahne LED", category: "dis-mekan", img: "/sahneled.webp" },
    { id: 9, name: "Trafik Bilgi LED", category: "dis-mekan", img: "/trafikbilgiled.webp" },
    { id: 10, name: "Totem LED", category: "dis-mekan", img: "/totemled.webp" },
    // Stadyum (2)
    { id: 11, name: "Skorboard", category: "stadyum", img: "/skorbord.webp" },
    { id: 12, name: "Stadyum LED", category: "stadyum", img: "/stadyumled.webp" },
    // Özel Üretim (4)
    { id: 13, name: "Araç Mobil LED", category: "ozel", img: "/aracmobilled.webp" },
    { id: 14, name: "Esnek LED", category: "ozel", img: "/esnekled.webp" },
    { id: 15, name: "Transparan LED", category: "ozel", img: "/transparanled.webp" },
    { id: 16, name: "Vitrin LED", category: "ozel", img: "/vitrinled.webp" },
];

const tabs = [
    { id: "tumu", label: "Tümü", count: 16 },
    { id: "ic-mekan", label: "İç Mekan", count: 4 },
    { id: "dis-mekan", label: "Dış Mekan", count: 6 },
    { id: "stadyum", label: "Stadyum", count: 2 },
    { id: "ozel", label: "Özel", count: 4 },
];

const getGlowColor = (cat) => {
    switch (cat) {
        case "ic-mekan": return "hover:border-cb-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]";
        case "dis-mekan": return "hover:border-cb-yellow hover:shadow-[0_0_30px_rgba(252,238,10,0.4)]";
        case "stadyum": return "hover:border-cb-red hover:shadow-[0_0_30px_rgba(206,43,47,0.4)]";
        case "ozel": return "hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]";
        default: return "hover:border-cb-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]";
    }
};

const getTabColor = (tabId, isActive) => {
    const styles = {
        "tumu": {
            active: "bg-white text-cb-black shadow-[0_0_15px_rgba(255,255,255,0.6)]",
            inactive: "text-white hover:text-white border-transparent hover:border-white/30"
        },
        "ic-mekan": {
            active: "bg-cb-cyan text-cb-black shadow-[0_0_15px_rgba(0,240,255,0.6)]",
            inactive: "text-white hover:text-cb-cyan border-transparent hover:border-cb-cyan/30"
        },
        "dis-mekan": {
            active: "bg-cb-yellow text-cb-black shadow-[0_0_15px_rgba(252,238,10,0.6)]",
            inactive: "text-white hover:text-cb-yellow border-transparent hover:border-cb-yellow/30"
        },
        "stadyum": {
            active: "bg-cb-red text-white shadow-[0_0_15px_rgba(206,43,47,0.6)]",
            inactive: "text-white hover:text-cb-red border-transparent hover:border-cb-red/30"
        },
        "ozel": {
            active: "bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]",
            inactive: "text-white hover:text-purple-500 border-transparent hover:border-purple-500/30"
        },
    };

    return isActive ? styles[tabId].active : `border ${styles[tabId].inactive}`;
};

function ProductsGrid() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const initialCategory = searchParams.get("kategori") || "tumu";
    const [activeTab, setActiveTab] = useState(initialCategory);

    useEffect(() => {
        const cat = searchParams.get("kategori");
        if (cat) setActiveTab(cat);
    }, [searchParams]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        router.replace(`/urunler?kategori=${tabId}`, { scroll: false });
    };

    const filteredProducts = activeTab === "tumu"
        ? productsData
        : productsData.filter(p => p.category === activeTab);

    return (
        <div className="max-w-7xl mx-auto px-4 w-full relative pt-8">
            {/* Geri Dön Butonu */}
            <button
                onClick={() => router.push("/")}
                // relative ve z-20 eklenerek tıklanabilirliği ve görünürlüğü garanti altına alındı
                className="relative z-20 mb-8 flex items-center gap-2 text-cb-cyan hover:text-white transition-colors font-inter text-sm tracking-widest uppercase group w-max mt-4"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Ana Sayfaya Dön
            </button>

            {/* Sekmeler */}
            <div className="flex flex-wrap items-center justify-start gap-4 mb-12 border-b border-white/10 pb-4">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className={`flex items-center gap-2 px-6 py-2 font-blender text-xl tracking-widest uppercase transition-all duration-300 ${getTabColor(tab.id, isActive)}`}
                        >
                            {tab.label}
                            <span className={`text-sm ${isActive ? "opacity-70" : "text-gray-500"}`}>
                                ({tab.count})
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Ürün Kartları */}
            <motion.div
                key={activeTab} // Kategori değiştiğinde animasyonu tetikler
                initial={{ opacity: 0, scale: 0.98, filter: "brightness(2)" }} // Parlayarak başlar
                animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }} // Normale döner
                transition={{ duration: 0.15, ease: "linear" }} // 150ms'lik kısa, sert bir geçiş
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-20"
            >
                {filteredProducts.map((product) => (
                    <TiltCard key={product.id} glowClass={getGlowColor(product.category)} className="h-[26rem]">
                        <div className="relative w-full h-3/4 mb-4 overflow-hidden bg-black/50 border-b border-white/10">
                            <Image
                                src={product.img}
                                alt={product.name}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                        </div>
                        <div className="mt-auto flex justify-between items-center">
                            <h3 className="text-2xl font-blender text-white tracking-wide uppercase">{product.name}</h3>
                            <span className="text-xs font-oswald text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">
                                İncele //
                            </span>
                        </div>
                    </TiltCard>
                ))}
            </motion.div>
        </div>
    );
}

export default function UrunlerPage() {
    return (
        <main className="min-h-screen bg-cb-black flex flex-col pt-32 md:pt-40 relative">
            {/* Sadece bu sayfaya özel linkleri gizle komutunu gönderiyoruz */}
            <Header hideLinks={true} />
            <Suspense fallback={<div className="text-cb-cyan font-blender text-2xl text-center animate-pulse">Sistem Yükleniyor...</div>}>
                <ProductsGrid />
            </Suspense>
        </main>
    );
}