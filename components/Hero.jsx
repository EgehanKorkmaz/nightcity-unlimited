import React from "react";
import { Header } from "./Header";
import { BackgroundBeams } from "./ui/background-beams";

export function Hero() {
    return (
        <>
            <Header />
            <div className="relative min-h-screen w-full flex flex-col items-center justify-center antialiased bg-cb-black overflow-hidden">

                <div className="relative z-10 max-w-7xl mx-auto w-full p-4 flex flex-col items-start text-left mt-20 pointer-events-auto">
                    <h1 className="text-6xl md:text-9xl font-blender font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)] flex flex-col gap-2">
                        <span>Görüntüde</span>
                        <span className="text-cb-cyan">Sınırları</span>
                        <span>Kaldırın.</span>
                    </h1>
                </div>

                {/* Lazer Ağları Arka Planı */}
                <BackgroundBeams className="z-0" />
            </div>
        </>
    );
}