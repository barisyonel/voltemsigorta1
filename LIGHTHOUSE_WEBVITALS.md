# Lighthouse & Core Web Vitals Rehberi

Bu dokümanda **Lighthouse** (Chrome DevTools) ile Performance, Accessibility, Best Practices, SEO skorlarını nasıl ölçeceğiniz ve **Core Web Vitals** (LCP, INP, CLS) takibini nasıl yapacağınız anlatılmaktadır.

---

## 1. Chrome DevTools ile Lighthouse (Manuel)

### Adımlar

1. **Chrome** ile sitenizi açın (örn. `http://localhost:3000` veya `https://tokatsigorta.com`).
2. **F12** veya **Sağ tık → İncele** ile DevTools’u açın.
3. Üst sekme çubuğunda **Lighthouse** sekmesine geçin.
4. **Categories**: Performance, Accessibility, Best Practices, SEO işaretli olsun.
5. **Device**: Mobile veya Desktop seçin.
6. **Analyze page load**’a tıklayın.
7. Rapor oluştuktan sonra her kategori için **0–100** skorları ve **Core Web Vitals** (LCP, INP, CLS) değerlerini inceleyin.

### Özet

- **Performance**: Yükleme hızı, Core Web Vitals (LCP, INP, CLS), FCP, TBT, Speed Index.
- **Accessibility**: ARIA, renk kontrastı, alt metinler, form etiketleri vb.
- **Best Practices**: HTTPS, güvenlik başlıkları, console hataları, deprecated API’ler.
- **SEO**: Meta description, title, h1, crawl edilebilirlik, mobil uyumluluk.

---

## 2. Lighthouse CLI (Otomasyon)

Projede npm script’leri tanımlı. Önce bağımlılıkları yükleyin:

```bash
cd sonchoy && npm install
```

### Lokal (localhost)

1. Bir terminalde uygulamayı çalıştırın:

   ```bash
   npm run dev
   ```

2. Başka bir terminalde:

   ```bash
   npm run lighthouse:local
   ```

Lighthouse `http://localhost:3000` üzerinde çalışır; raporlar `lighthouse-reports/` altında **HTML** ve **JSON** olarak kaydedilir, ardından HTML tarayıcıda açılır.

### Canlı (Production)

```bash
npm run lighthouse:prod
```

`https://tokatsigorta.com` için audit alır; sonuçlar yine `lighthouse-reports/` içine yazılır ve görüntülenir.

### CLI ile Özel Ölçüm

Sadece belirli kategoriler:

```bash
npx lighthouse https://tokatsigorta.com --only-categories=performance,seo --view
```

Masaüstü (throttling yok) için `--preset=desktop` kullanabilirsiniz.  
**Not:** Lighthouse, Node 22+ önerir. `node -v` ile kontrol edin.

---

## 3. Core Web Vitals (LCP, INP, CLS) Takibi

### Projede Yapılan Kurulum

- **`web-vitals`** paketi eklendi.
- **`WebVitalsReporter`** client component’i (`components/WebVitalsReporter.js`) LCP, INP ve CLS’i ölçüp raporluyor.
- Bu component `app/layout.js` içinde kullanılıyor; tüm sayfalarda çalışır.

### Ne Yapıyor?

- **Geliştirme (`npm run dev`)**: Metrikler tarayıcı **Console**’da `[Core Web Vitals]` ile loglanır.
- **Production**: İsteğe bağlı olarak `NEXT_PUBLIC_WEB_VITALS_ENDPOINT` ile bir analytics endpoint’ine `navigator.sendBeacon` ile gönderilebilir.

### Metrik Kısa Özeti

| Metrik | Açıklama | İyi | İyileştir | Kötü |
|--------|----------|-----|-----------|------|
| **LCP** (Largest Contentful Paint) | Ana içeriğin görünme süresi | ≤ 2.5 s | 2.5–4 s | > 4 s |
| **INP** (Interaction to Next Paint) | Tıklama/etkileşimden ekrana yansıma | ≤ 200 ms | 200–500 ms | > 500 ms |
| **CLS** (Cumulative Layout Shift) | Görsel kayma / layout kararsızlığı | ≤ 0.1 | 0.1–0.25 | > 0.25 |

### Opsiyonel: Analytics Endpoint

Kendi endpoint’inize göndermek için `.env.local`:

```env
NEXT_PUBLIC_WEB_VITALS_ENDPOINT=https://your-api.com/api/web-vitals
```

Backend’iniz bu endpoint’e gelen `POST` body’deki JSON’u (örn. `name`, `value`, `rating`, `id`) kaydedip dashboard veya raporlarda kullanabilir.

---

## 4. Özet Checklist

- [ ] **Chrome DevTools → Lighthouse** ile manuel Performance, Accessibility, Best Practices, SEO ölçümü.
- [ ] **`npm run lighthouse:local`** / **`npm run lighthouse:prod`** ile CLI audit ve raporları `lighthouse-reports/` altında inceleme.
- [ ] **Core Web Vitals**: Dev’da console loglarına bakma; production’da gerekirse `NEXT_PUBLIC_WEB_VITALS_ENDPOINT` ile analytics’e gönderme.
- [ ] LCP, INP, CLS için hedef: mümkün olduğunca “İyi” aralığında kalmak.

---

## 5. Faydalı Linkler

- [Lighthouse Dokümantasyonu](https://developer.chrome.com/docs/lighthouse/overview)
- [Core Web Vitals (web.dev)](https://web.dev/articles/vitals)
- [Lighthouse Viewer](https://googlechrome.github.io/lighthouse/viewer/) — JSON raporlarını yükleyip paylaşmak için
