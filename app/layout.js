import "./globals.css";

export const metadata = {
  title: "Night Unlimited | Cyberpunk Edition",
  description: "Night City'nin en iyi ürünleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="antialiased min-h-screen overflow-x-hidden">
        {/* Navigasyon barı (Header) buraya gelecek */}
        
        <main>
          {children}
        </main>
        
        {/* Footer buraya gelecek */}
      </body>
    </html>
  );
}
