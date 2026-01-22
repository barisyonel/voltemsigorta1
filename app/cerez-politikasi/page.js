import Layout from "@/components/layout/Layout"

export default function CookiePolicyPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Çerez Politikası">
                <section className="legal-page">
                    <div className="container">
                        <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">YASAL METİNLER</p>
                            </div>
                            <h2 className="section-title__title">Çerez Politikası</h2>
                        </div>
                        <div className="legal-page__content">
                            <p>Bu politika, web sitemizde kullanılan çerezlerin (cookies) türlerini ve kullanım amaçlarını
                                açıklar.</p>

                            <h3>1. Çerez Nedir?</h3>
                            <p>Çerezler, web sitesi tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Site
                                kullanımınızı kolaylaştırır ve deneyimi iyileştirir.</p>

                            <h3>2. Kullanılan Çerez Türleri</h3>
                            <p>Zorunlu çerezler, performans/analitik çerezleri ve işlevsellik çerezleri kullanılabilir.</p>

                            <h3>3. Çerezlerin Kullanım Amaçları</h3>
                            <p>Site işlevlerini sağlamak, kullanıcı tercihlerini hatırlamak ve performansı analiz etmek
                                amaçlarıyla kullanılabilir.</p>

                            <h3>4. Çerez Tercihleri</h3>
                            <p>Tarayıcı ayarlarınız üzerinden çerezleri yönetebilir veya silebilirsiniz. Çerezleri
                                devre dışı bırakmanız durumunda bazı özellikler çalışmayabilir.</p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
