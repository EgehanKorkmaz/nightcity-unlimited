import React from "react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-cb-black border-t border-cb-cyan/30 pt-16 pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4">

                {/* Üst Kısım: 4 Kolonlu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. Kolon: Logo ve Hakkında */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="hover:scale-105 transition-transform duration-300 w-max">
                            <img src="/logo.png" alt="Night Unlimited Logo" className="h-20 object-contain" />
                        </Link>
                        <p className="text-gray-400 font-inter text-sm leading-relaxed">
                            Sınırları ortadan kaldıran yüksek çözünürlüklü LED teknolojileriyle, sıradan mekanları dijital başyapıtlara dönüştürüyoruz.
                        </p>
                    </div>

                    {/* 2. Kolon: Hızlı Bağlantılar */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-blender tracking-widest text-xl uppercase mb-2">Sistem <span className="text-cb-cyan">Ağı</span></h4>
                        <nav className="flex flex-col gap-2 font-inter text-sm text-gray-400">
                            <Link href="/#urunler" className="hover:text-cb-yellow transition-colors w-max">Ürün Kategorileri</Link>
                            <Link href="/#biz-kimiz" className="hover:text-cb-yellow transition-colors w-max">Kurumsal Kimlik</Link>
                            <Link href="/#iletisim" className="hover:text-cb-yellow transition-colors w-max">İletişim Portalı</Link>
                        </nav>
                    </div>

                    {/* 3. Kolon: İletişim Bilgileri */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-blender tracking-widest text-xl uppercase mb-2">Bağlantı <span className="text-cb-cyan">Noktası</span></h4>
                        <div className="flex flex-col gap-2 font-inter text-sm text-gray-400">
                            <a href="mailto:info@nightunlimited.com" className="hover:text-cb-yellow transition-colors w-max">INFO@NIGHTUNLIMITED.COM</a>
                            <a href="tel:+905550000000" className="hover:text-cb-yellow transition-colors w-max">+90 (555) 000 00 00</a>
                            <p className="mt-2 text-gray-500">Night City, Siberpunk Bölgesi<br />Bina 404, Kat 7</p>
                        </div>
                    </div>

                    {/* 4. Kolon: Sosyal Medya */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-white font-blender tracking-widest text-xl uppercase mb-2">Global <span className="text-cb-cyan">Ağlar</span></h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-cb-black hover:bg-cb-cyan hover:border-cb-cyan transition-all duration-300">
                                <span className="font-oswald tracking-widest">IN</span>
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-cb-black hover:bg-cb-yellow hover:border-cb-yellow transition-all duration-300">
                                <span className="font-oswald tracking-widest">IG</span>
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cb-red hover:border-cb-red transition-all duration-300">
                                <span className="font-oswald tracking-widest">YT</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Alt Çizgi */}
                <div className="w-full h-px bg-white/10 mb-8"></div>

                {/* Telif Hakkı ve Geliştirici İmzası */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 font-inter text-xs tracking-wider">
                        © {currentYear} Night Unlimited. Tüm Sistem Hakları Saklıdır.
                    </p>

                    <a
                        href="https://www.egehankorkmaz.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-gray-500 hover:text-cb-cyan transition-colors font-inter text-xs tracking-wider"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>
                        Designed by Egehan Korkmaz
                    </a>
                </div>

            </div>
        </footer>
    );
}