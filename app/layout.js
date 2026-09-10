import { Oswald, Inter, Montserrat } from 'next/font/google';
import { Footer } from "@/components/Footer"; // Dosyanın en üstüne import et
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
  description: "Night City",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${oswald.variable} ${montserrat.variable} ${blenderPro.variable} antialiased min-h-screen overflow-x-hidden bg-cb-black text-white`}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}