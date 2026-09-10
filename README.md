# Night Unlimited — Proje Dokümantasyonu ve Mimari Raporu

Bu doküman; **Night Unlimited** (LED ekran ve görüntü sistemleri) portfolyo web sitesi için bugüne kadar geliştirilen mimari yapıyı, tamamlanan bileşenleri, kullanılan teknoloji yığınını ve mobil cihazlar için yapılan kritik optimizasyonları kapsamaktadır.

---

## 1. Mimari ve Teknoloji Yığını (Tech Stack)

### Temel Çatı & Kütüphaneler
* **Next.js (App Router):** Projenin omurgası. Sunucu taraflı oluşturma (SSR), istemci taraflı render (CSR), dinamik sayfa yönlendirmeleri ve performans optimizasyonları için kullanıldı.
* **React (v18+):** Bileşen (component) mimarisi, `useState`, `useEffect`, `useRef` kancaları ve genel arayüz yönetimi için temel kütüphane.
* **JavaScript (JSX):** Projenin ana programlama dili.

### Stil ve Tasarım Sistemi
* **Tailwind CSS:** Siber-siyah (`bg-cb-black`), camgöbeği (`cb-cyan`) ve siber-sarı (`cb-yellow`) renk paleti üzerine kurulu global grid ve responsive yapı.
* **Aceternity UI:** `CanvasRevealEffect` gibi modern 3D ve görsel bileşenlerin altyapısı.
* **Özel Fontlar:** `font-blender`, `font-oswald` ve `font-inter` tipografi entegrasyonları.

### Animasyon ve 3D Motorları
* **Framer Motion:** Sayfa geçişleri, elementlerin ekrana giriş animasyonları, hero bölümündeki SVG ışık izleri (`path tracing`), mobil duyarlı sayaç animasyonları (`Counter`) ve genel "snappy" (mekanik) hareketler.
* **Three.js & @react-three/fiber:** Kategoriler bölümündeki 3D partikül ve WebGL tabanlı arka plan efektleri.

### Yerleşik Web API'leri & DevOps
* **Intersection Observer API (`useInView`):** Header scrollspy yapısı ve Hakkımızda bölümündeki akıllı sayaç tetiklemeleri için.
* **Window.matchMedia / Resize Listener:** Mobil/dokunmatik cihaz optimizasyonları ve sahte hover engellemeleri.
* **Git & GitHub / Vercel:** Versiyon kontrolü, kod yönetimi ve Edge CDN tabanlı üretim (production) dağıtımları.

---

## 2. Tamamlanan Ana Bileşenler (Components)

* **Header (Mobil Optimizasyonlu Smart Nav):**
  * Sabit (`fixed`) ve performans odaklı yapı. Mobilde ağır `backdrop-blur` kaldırılarak siberpunk temaya uygun, akıcı animasyonlu modern bir **Hamburger Menü** mimarisine geçirildi.
  * Akıllı routing fonksiyonu (`handleNavClick`) ile hem anasayfada yumuşak kaydırma (`smooth scroll`) hem de alt sayfalardan (`/urunler`) doğrudan çapahlara (`/#iletisim`) hatasız yönlendirme sağlandı.
* **Hero (Optimize Edilmiş Kavisli Işık Yolları):**
  * Donanımsal hızlandırma kullanan saf SVG yolları (`curved paths`).
  * Mobilde performans artışı ve görsel doygunluk için çizgi sayısı optimize edildi, çizgi kalınlıkları artırıldı ve `preserveAspectRatio="none"` ile tüm ekranı kaplaması sağlandı.
* **Kategoriler (Mobil Uyumlu Dikey Grid):**
  * Masaüstünde Aceternity UI `CanvasRevealEffect` ile 3D partikül deneyimi.
  * Mobilde cihaz performansını korumak ve dikey alanı verimli kullanmak adına alt alta şık dikey dikdörtgen formuna dönüştürüldü, köşe simgeleri (`+` işaretleri) korundu.
* **Hakkımızda / Biz Kimiz (Video & Animasyonlu Sayaçlar):**
  * Asimetrik siberpunk grid düzeni, arka planda döngüde çalışan kurumsal tanıtım videosu ve taranmış CRT ekran efektleri.
  * Dış bağımlılık olmaksızın (`requestAnimationFrame` ve `useInView` ile) sıfırdan yazılan akıcı **Count Up** (10+ Ar-Ge, 500+ Global Proje) sayaç animasyonu entegre edildi.
* **İletişim Portalı:**
  * Transparan siberpunk form yapısı, havaya kalkan label detayları ve mekanik sarı hover vurguları.
* **Footer (Kurumsal Alt Bilgi ve Bölgesel Seçim):**
  * 4 kolonlu kurumsal yapı; logo, kurumsal açıklama, menü linkleri, tam merkez adres (Menemen/İzmir), çoklu e-posta/telefon hatları ve çalışma saatleri.
  * Sosyal medya ikonları yerine siberpunk arayüze uygun **TR / DE / EN** dil/bölge seçim butonları yerleştirildi.
  * "Designed by Egehan Korkmaz" imzası özel animasyonlu ikon eşliğinde portfolyoya bağlandı.
* **Ürünler Sayfası (`/urunler`):**
  * Kategorilere göre dinamik filtreleme, özel glow renkleri ve temiz geri dönüş mekanizmaları.

---

## 3. Çözülen Kritik Sorunlar ve Optimizasyonlar

* **Mobil Bellek (GPU) Çökme Sorununun Çözümü:** Next.js `<Link>` bileşenlerinin ekrana giren ögeleri otomatik önden yüklemesi (prefetching) nedeniyle Three.js ve Framer Motion altındaki cihazların çökmelerine karşı `prefetch={false}` ve mobil koşullu render izolasyonları uygulandı.
* **Header Çökme Hatası (İzolasyon Testi):** Sabit header içerisindeki ağır blur hesaplamalarının mobilde yarattığı bellek darboğazı, mobil için optimize edilmiş hafif hamburger menü yapısıyla tamamen giderildi.
* **Hydration Mismatch Önlemleri:** `window` nesnesi kullanan dinamik boyut kontrolleri istemci tarafına (`useEffect`) sabitlenerek sunucu-istemci uyuşmazlıkları engellendi.