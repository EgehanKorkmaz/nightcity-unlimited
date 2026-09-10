"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders"; // Mevcut buton bileşenimizi kullanıyoruz

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sisteme İletilen Veri:", formData);
        // İleride buraya API/Mail entegrasyonu gelecek
    };

    return (
        <section id="iletisim" className="w-full py-24 bg-cb-black relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Sol Alan: Başlık ve İletişim Bilgileri */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-4xl md:text-6xl font-blender text-white tracking-widest uppercase mb-6 leading-none">
                        Birlikte <br /><span className="text-cb-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">İnşa Edelim</span>
                    </h2>
                    <p className="text-gray-400 font-inter text-lg mb-10 max-w-md leading-relaxed">
                        Sınırları zorlayan yeni projenizi hayata geçirmek için sistemimize bağlanın. Mimari vizyonunuzu dijital gerçekliğe dönüştürelim.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 border border-cb-cyan/30 flex items-center justify-center text-cb-cyan group-hover:bg-cb-cyan group-hover:text-cb-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            {/* 2. E-Posta linki aktif hale getirildi */}
                            <a href="mailto:info@nightunlimited.com" className="font-oswald tracking-widest text-white group-hover:text-cb-cyan transition-colors">
                                INFO@NIGHTUNLIMITED.COM
                            </a>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 border border-cb-cyan/30 flex items-center justify-center text-cb-cyan group-hover:bg-cb-cyan group-hover:text-cb-black transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                            </div>
                            {/* 3. Telefon linki aktif hale getirildi */}
                            <a href="tel:+905550000000" className="font-oswald tracking-widest text-white group-hover:text-cb-cyan transition-colors">
                                +90 (555) 000 00 00
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Sağ Alan: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-cb-black/50 border border-white/5 p-8 relative"
                >
                    {/* Form Köşe Tasarımları */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cb-cyan"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cb-cyan"></div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        <div className="relative">
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-transparent border-b border-gray-600 text-white font-inter py-2 focus:outline-none focus:border-cb-cyan transition-colors peer"
                                placeholder=" "
                            />
                            <label className="absolute left-0 top-2 text-gray-500 font-inter text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-cb-cyan peer-valid:-top-5 peer-valid:text-xs">
                                Ad Soyad
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-transparent border-b border-gray-600 text-white font-inter py-2 focus:outline-none focus:border-cb-yellow transition-colors peer"
                                placeholder=" "
                            />
                            <label className="absolute left-0 top-2 text-gray-500 font-inter text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-cb-yellow peer-valid:-top-5 peer-valid:text-xs">
                                E-Posta
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-transparent border-b border-gray-600 text-white font-inter py-2 focus:outline-none focus:border-cb-cyan transition-colors peer resize-none"
                                placeholder=" "
                            ></textarea>
                            <label className="absolute left-0 top-2 text-gray-500 font-inter text-sm transition-all peer-focus:-top-5 peer-focus:text-xs peer-focus:text-cb-cyan peer-valid:-top-5 peer-valid:text-xs">
                                Proje Parametreleri (Mesajınız)
                            </label>
                        </div>

                        {/* 4. Buton hover rengi hover:bg-cb-yellow olarak değiştirildi */}
                        <Button
                            duration={3000}
                            className="w-full py-4 font-blender text-xl tracking-widest uppercase bg-cb-black hover:bg-cb-yellow hover:text-cb-black transition-colors"
                        >
                            Veriyi İlet
                        </Button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}