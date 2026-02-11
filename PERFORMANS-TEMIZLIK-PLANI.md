# Performans ve Temizlik Planı — Voldem Sigorta (tokatsigorta.com)

> Oluşturulma: Şubat 2026 | Lighthouse Skorları: Performance 71, Accessibility 97, Best Practices 96, SEO 92

---

## 1. Öncelik Sırası

| Öncelik | Görev | Etki | Zorluk |
|---------|-------|------|--------|
| 1 | Kullanılmayan bileşenleri kaldır | Bundle küçülür, bakım kolaylaşır | Düşük |
| 2 | Unused CSS azaltma (kritik CSS, lazy CSS) | LCP/performans iyileşir | Orta |
| 3 | LCP optimizasyonu (görsel boyut/format) | Performance skoru yükselir | Orta |
| 4 | Bootstrap-select CSS kontrolü | Gereksiz KB azalır | Düşük |
| 5 | Map.js import düzeltmesi / kaldırma | Olası hata önlenir | Düşük |

---

## 2. Kaldırılacak Kullanılmayan Bileşenler

### 2.1 Sections (home1) — Hiçbir sayfada import edilmiyor

```
components/sections/home1/
├── Cases.js
├── Clients.js
├── Cta.js
├── Faq.js
├── Feature.js
├── Features.js
├── Funfacts.js
├── Map.js
├── News.js
├── Pricing.js
├── Process.js
├── Quote.js
├── video.js
└── Work.js
```

**Not:** `sikca-sorulan-sorular` sayfası kendi FAQ içeriğini kullanıyor; `Faq.js` başka bir bileşen, kullanılmıyor.

### 2.2 Elements — Hiçbir sayfada import edilmiyor

```
components/elements/
├── VideoPopup.js
├── SonchoyPackCard.js
├── ProductList.js
└── ProductCard.js
```

### 2.3 Sliders — Sadece kullanılmayan section’larda kullanılıyor

Bu section’lar kaldırıldığında bu slider’lar da silinebilir:

```
components/slider/
├── AwardSlider.js
├── BrandSlider.js
├── ClientSlider.js
├── ContactSlider.js
├── MapSlider.js
├── ProjectSlider.js
├── ProjectSlider2.js
```

**Korunacak:** `TestimonialSlider.js` — `Testimonial.js` tarafından kullanılıyor (ana sayfa).

**Kontrol:** `Brand.js` kendi Swiper’ını kullanıyor, `BrandSlider` kullanmıyor.

---

## 3. CSS Temizliği

### 3.1 Bootstrap-select

- **Durum:** `public/assets/vendors/bootstrap-select/` mevcut, layout’ta link edilmiyor.
- **Kontrol:** Projede `bootstrap-select` JS kullanımı var mı aranmalı.
- **Aksiyon:** Kullanılmıyorsa `bootstrap-select` klasörü ve `sonchoy.css` içindeki ilgili stiller kaldırılabilir.

### 3.2 Unused CSS (Lighthouse ~79 KiB)

- `sonchoy.css` — Şablonun tamamı; kullanılan bölümler korunmalı, gereksiz bloklar tespit edilip temizlenebilir.
- `bootstrap.min.css` — Gerekli grid/utility sınıfları tutulmalı; PurgeCSS / kritik CSS ile sadeleştirilebilir.
- `all.min.css` (Font Awesome) — Kullanılan ikonlara göre subset veya kritik ikonlar alınabilir.

### 3.3 Async CSS (zaten yapılmış)

- `animate.min.css`, `custom-animate.css` — `AsyncStylesheets` ile async yükleniyor ✓

---

## 4. Import Düzeltmeleri

### 4.1 Map.js

```javascript
// Mevcut (hatalı - MapSlider1.js dosyası yok):
import MapSlider1 from "@/components/slider/MapSlider1"

// Map.js kullanılmıyorsa: Dosya tamamen kaldırılabilir.
// Kullanılacaksa düzeltme:
import MapSlider1 from "@/components/slider/MapSlider"
```

Map.js kullanılmadığı için öneri: **Dosyayı sil** (MapSlider ile birlikte).

---

## 5. LCP ve Görsel Optimizasyonu

- Ana sayfa LCP: ~5.4 s.
- Slider görselleri: `voldemm.jpeg`, `voldemsigortaa.jpeg`, `slider5.jpg`, `arackasko.png` vb.
- **Öneriler:**
  - Slider için `priority` ve uygun `sizes` kullanmak.
  - Cloudinary ile WebP/AVIF formatları kullanmak (next.config’de tanımlı).
  - Görsellerin gerçek boyutlarının ekrandan çok büyük olmamasını sağlamak.
  - LCP elemanına `fetchpriority="high"` vermek.

---

## 6. Uygulama Sırası

### Faz 1 — Düşük risk (önce yapılacak)

1. Kullanılmayan section bileşenlerini sil (Cases, Clients, Cta, Faq, Feature, Features, Funfacts, Map, News, Pricing, Process, Quote, video, Work).
2. Kullanılmayan element bileşenlerini sil (VideoPopup, SonchoyPackCard, ProductList, ProductCard).
3. Kullanılmayan slider bileşenlerini sil (AwardSlider, BrandSlider, ClientSlider, ContactSlider, MapSlider, ProjectSlider, ProjectSlider2).
4. `npm run build` ile build’in başarılı olduğunu kontrol et.

### Faz 2 — Orta risk

5. Bootstrap-select kullanımını kontrol et; kullanılmıyorsa klasör ve ilgili CSS’i kaldır.
6. LCP için ana sayfa slider görsellerini optimize et (priority, sizes, format).
7. İsteğe bağlı: PurgeCSS veya kritik CSS ile `sonchoy.css` / Bootstrap sadeleştirmesi.

### Faz 3 — İsteğe bağlı

8. Font Awesome subset oluşturma veya sadece kullanılan ikonları dahil etme.
9. Tekrar Lighthouse çalıştırıp skorları karşılaştırma.

---

## 7. Doğrulama Komutları

```bash
# Build kontrolü
npm run build

# Lighthouse (prod)
npm run lighthouse:prod

# Veya tek komut
npx lighthouse https://tokatsigorta.com --only-categories=performance --output=json --output-path=./lighthouse-reports/check.json
```

---

## 8. Beklenen İyileşmeler

- **Bundle boyutu:** ~50–100 KB azalma (kullanılmayan bileşenler).
- **Performance skoru:** 71 → 75–80 bandı (LCP + unused JS/CSS optimizasyonu ile).
- **Bakım:** Daha az dosya, daha temiz kod tabanı.

---

*Bu plan, önceki performans testi ve kod analizi sonuçlarına dayanmaktadır.*
