import Layout from "@/components/layout/Layout"

export const metadata = {
    title: "Çerez Politikası | Voldem Sigorta Tokat",
    description: "Tokatsigorta.com çerez politikası. Web sitemizde kullanılan çerezler ve gizlilik tercihleriniz.",
    alternates: { canonical: "/cerez-politikasi" },
}

export default function CerezPolitikasiPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Çerez Politikası">
            <section className="about-three about-six">
                <div className="container">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">ÇEREZLER</p>
                        </div>
                        <h2 className="section-title__title">Çerez Politikası</h2>
                    </div>
                    <div className="about-three__text">
                        <p>Bu web sitesinde, kullanıcı deneyimini geliştirmek ve hizmet kalitesini artırmak için
                            çerezler kullanılmaktadır. Çerezler, cihazınıza kaydedilen küçük metin dosyalarıdır
                            ve siteyi daha verimli kullanmanıza yardımcı olur.</p>
                        <p><strong>Kullanılan Çerez Türleri:</strong> Zorunlu çerezler, performans ve analitik
                            çerezleri, işlevsel çerezler ve tercih çerezleri kullanılabilir.</p>
                        <p><strong>Çerezleri Yönetme:</strong> Tarayıcı ayarlarından çerezleri silebilir veya
                            devre dışı bırakabilirsiniz. Ancak bazı çerezleri kapatmanız, sitenin doğru
                            çalışmamasına neden olabilir.</p>
                        <p><strong>Üçüncü Taraf Çerezler:</strong> Site performansını ölçmek için üçüncü taraf
                            analiz araçları kullanılabilir. Bu araçlar, anonim kullanım verilerini işleyebilir.</p>
                        <p>Çerez politikamız ve kişisel verilerin korunması hakkında detaylı bilgi için
                            KVKK Aydınlatma Metni sayfasını inceleyebilirsiniz.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
