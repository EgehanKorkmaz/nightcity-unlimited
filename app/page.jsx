"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Kullanıcının bu oturumda splash ekranını görüp görmediğini kontrol et
    const hasSeenSplash = sessionStorage.getItem("splashSeen");

    if (hasSeenSplash) {
      setIsLoading(false);
      return;
    }

    // İlk girişse 2.5 saniye bekle ve session'a kaydet
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("splashSeen", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cb-black"
          >
            <motion.img
              src="/logo.png"
              alt="Night Unlimited"
              className="w-72 md:w-[28rem] h-auto object-contain mb-8"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <p className="text-3xl font-blender uppercase tracking-widest glitch-text" data-text="Giriş Yapılıyor...">
              Giriş Yapılıyor...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full min-h-screen"
          >
            <Hero />
            <Categories />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}