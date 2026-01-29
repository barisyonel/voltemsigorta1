/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression
  compress: true,
  
  // Remove powered-by header for security
  poweredByHeader: false,

  // Güvenlik başlıkları — SSL, XSS, clickjacking koruması
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
  
  async redirects() {
    return [
      { source: "/about", destination: "/hakkimizda", permanent: true },
      { source: "/contact", destination: "/iletisim", permanent: true },
      { source: "/faq", destination: "/sikca-sorulan-sorular", permanent: true },
      { source: "/insurance", destination: "/sigorta", permanent: true },
      { source: "/life-insurance", destination: "/hayat-sigortasi", permanent: true },
      { source: "/health-insurance", destination: "/saglik-sigortasi", permanent: true },
      { source: "/car-insurance", destination: "/arac-sigortasi", permanent: true },
      { source: "/home-insurance", destination: "/konut-sigortasi", permanent: true },
      { source: "/family-insurance", destination: "/dask-sigortasi", permanent: true },
      { source: "/aile-sigortasi", destination: "/dask-sigortasi", permanent: true },
      { source: "/business-insurance", destination: "/isyeri-sigortasi", permanent: true },
      { source: "/agricultural-insurance", destination: "/tarsim", permanent: true },
      { source: "/tarim-sigortasi", destination: "/tarsim", permanent: true },
      { source: "/team", destination: "/ekibimiz", permanent: true },
      { source: "/team-details", destination: "/ekip-detay", permanent: true },
      { source: "/testimonial", destination: "/yorumlar", permanent: true },
      { source: "/portfolio", destination: "/portfoy", permanent: true },
      { source: "/portfolio-details", destination: "/portfoy-detay", permanent: true },
      { source: "/products", destination: "/urunler", permanent: true },
      { source: "/product-details", destination: "/urun-detay", permanent: true },
      { source: "/blog-details", destination: "/blog", permanent: true },
      { source: "/blog-sidebar", destination: "/blog", permanent: true },
    ]
  },
}

module.exports = nextConfig
