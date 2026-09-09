import { Oswald, Inter, Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";

// Google Fontları
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

// Yerel Cyberpunk Fontumuz
const blenderPro = localFont({
  src: '../public/fonts/blender-pro-book.ttf',
  variable: '--font-blender',
  display: 'swap',
});

export const metadata = {
  title: "Night Unlimited | Cyberpunk Edition",
  description: "Night City'nin en iyi ürünleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      {/* Tanımladığımız font değişkenlerini body'e ekliyoruz */}
      <body className={`${inter.variable} ${oswald.variable} ${montserrat.variable} ${blenderPro.variable} antialiased min-h-screen overflow-x-hidden bg-cb-black text-white`}>
        {/* Navigasyon barı (Header) buraya gelecek */}

        <main>
          {children}
        </main>

        {/* Footer buraya gelecek */}
      </body>
    </html>
  );
}

