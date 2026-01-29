# Vercel & SSL Kurulumu — tokatsigorta.com

Bu proje **tokatsigorta.com** domain’i ile Vercel üzerinde yayında. SSL/HTTPS ve domain yönlendirmeleri aşağıdaki şekilde yapılandırıldı.

---

## 1. Otomatik SSL (HTTPS)

- **Vercel**, özel domain’ler için Let’s Encrypt ile **ücretsiz SSL sertifikası** verir ve otomatik yeniler.
- **HTTP → HTTPS** yönlendirmesi Vercel tarafında otomatik yapılır (308 kalıcı yönlendirme).
- Ek bir SSL ayarı yapmanıza gerek yoktur.

---

## 2. Domain Eklemek (Vercel Dashboard)

1. [Vercel Dashboard](https://vercel.com/dashboard) → projenizi seçin.
2. **Settings** → **Domains**.
3. **Add** ile domain ekleyin:
   - `tokatsigorta.com` (apex/root)
   - `www.tokatsigorta.com` (opsiyonel; www → apex yönlendirmesi için)

### www → apex yönlendirmesi

- `vercel.json` içinde **www.tokatsigorta.com** → **https://tokatsigorta.com** kalıcı yönlendirme tanımlı.
- Hem `www` hem `tokatsigorta.com` domain’lerini Vercel’e ekleyin. `www` isteği otomatik olarak apex’e yönlendirilir.

---

## 3. DNS Ayarları

Domain sağlayıcınızda (GoDaddy, Namecheap, Cloudflare vb.):

| Tip   | Name | Value                    | Not                    |
|-------|------|--------------------------|------------------------|
| **A** | `@`  | `76.76.21.21`            | Vercel IPv4 (apex)     |
| **CNAME** | `www` | `cname.vercel-dns.com` | Vercel’in verdiği CNAME |

Vercel, domain eklerken size **doğru değerleri** gösterir. Orada yazanları kullanın.

---

## 4. SSL Sertifikası Ön‑üretimi (Opsiyonel)

Domain’i taşımadan önce sertifika üretmek isterseniz:

1. **Settings** → **Domains** → **tokatsigorta.com** → **SSL Certificates**.
2. **Pre-generate Certificate** ile sertifikayı önceden oluşturun.
3. DNS’i Vercel’e çektikten sonra yayına alın; kesinti azalır.

---

## 5. Uygulama Tarafı Yapılandırma (Yapıldı)

| Öğe | Açıklama |
|-----|----------|
| **next.config.js** | HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy |
| **vercel.json** | www → apex yönlendirme; X-DNS-Prefetch-Control, X-XSS-Protection |
| **metadataBase** | `https://tokatsigorta.com` (layout.js) |
| **Sitemap / robots.txt** | `https://tokatsigorta.com` kullanılıyor |
| **manifest.webmanifest** | `start_url` ve `scope` → `https://tokatsigorta.com/` |
| **.env.example** | `NEXT_PUBLIC_SITE_URL=https://tokatsigorta.com` |

Tüm canonical ve paylaşım URL’leri **HTTPS** ve **tokatsigorta.com** olacak şekilde ayarlı.

---

## 6. Ortam Değişkenleri (Vercel)

Vercel → **Settings** → **Environment Variables**:

- `NEXT_PUBLIC_SITE_URL` = `https://tokatsigorta.com` (production)
- Cloudinary vs. kullandığınız diğer servislerin env değişkenleri (gerekirse)

---

## 7. Kontrol Listesi

- [ ] `tokatsigorta.com` ve `www.tokatsigorta.com` Vercel’e eklendi
- [ ] DNS kayıtları (A + CNAME) doğru ve yayılmış
- [ ] SSL sertifikası aktif (Vercel’de yeşil onay)
- [ ] `https://tokatsigorta.com` ve `https://www.tokatsigorta.com` açılıyor
- [ ] `http://` adresleri HTTPS’e yönleniyor
- [ ] `www` → apex yönlendirmesi çalışıyor

---

## 8. Kaynaklar

- [Vercel – Custom Domains](https://vercel.com/docs/concepts/projects/domains)
- [Vercel – SSL Certificates](https://vercel.com/docs/security/encryption)
- [Vercel – Pre-generate SSL](https://vercel.com/docs/domains/pre-generating-ssl-certs)
