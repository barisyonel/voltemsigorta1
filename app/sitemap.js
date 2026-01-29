import { MetadataRoute } from 'next'

export default function sitemap() {
  const baseUrl = 'https://tokatsigorta.com'
  const currentDate = new Date()
  
  // Son güncelleme tarihleri - SEO için kritik
  // Sigorta sayfaları yakın zamanda güncellendi (H1 tag'leri eklendi)
  const recentUpdateDate = new Date('2026-01-28')
  
  // Ana sayfalar - yüksek öncelik, sık güncellenir
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sigorta`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Sigorta sayfaları - yüksek öncelik (ana içerik, Google için kritik)
  // Bu sayfalar ana gelir kaynağı olduğu için yüksek priority
  const insurancePages = [
    {
      url: `${baseUrl}/kasko-sigortasi`,
      lastModified: recentUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/arac-sigortasi`,
      lastModified: recentUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/konut-sigortasi`,
      lastModified: recentUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dask-sigortasi`,
      lastModified: recentUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/saglik-sigortasi`,
      lastModified: recentUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hayat-sigortasi`,
      lastModified: recentUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/isyeri-sigortasi`,
      lastModified: recentUpdateDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  // İçerik sayfaları - orta-yüksek öncelik
  const contentPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/urunler`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfoy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ekibimiz`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/sikca-sorulan-sorular`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // İletişim ve yardımcı sayfalar
  const utilityPages = [
    {
      url: `${baseUrl}/iletisim`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8, // İletişim sayfası önemli
    },
    {
      url: `${baseUrl}/kvkk`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2, // Yasal sayfalar düşük öncelik
    },
    {
      url: `${baseUrl}/gizlilik`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${baseUrl}/cerez-politikasi`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]

  // Tüm sayfaları birleştir ve sırala (öncelik sırasına göre)
  return [
    ...mainPages,
    ...insurancePages,
    ...contentPages,
    ...utilityPages,
  ]
}
