import Layout from "@/components/layout/Layout"

export default function PrivacyPolicyPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gizlilik Politikası">
                <section className="legal-page">
                    <div className="container">
                        <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">YASAL METİNLER</p>
                            </div>
                            <h2 className="section-title__title">Gizlilik Politikası</h2>
                        </div>
                        <div className="legal-page__content">
                            <p>Voldem Sigorta Tokat olarak ziyaretçilerimizin ve müşterilerimizin gizliliğine önem
                                veriyoruz. Bu politika, kişisel verilerin korunması ve gizlilik prensiplerimizi açıklar.</p>

                            <h3>1. Toplanan Bilgiler</h3>
                            <p>İletişim formları ve teklif talepleri aracılığıyla ad-soyad, telefon, e-posta ve talep
                                bilgileri gibi veriler toplanabilir.</p>

                            <h3>2. Kullanım Amaçları</h3>
                            <p>Toplanan veriler; teklif süreçleri, müşteri destek hizmetleri, iletişim kurma ve yasal
                                yükümlülüklerin yerine getirilmesi amaçlarıyla kullanılır.</p>

                            <h3>3. Güvenlik</h3>
                            <p>Verilerinizin güvenliği için teknik ve idari tedbirler uygulanır. Yetkisiz erişim, kayıp
                                veya kötüye kullanım risklerine karşı korunur.</p>

                            <h3>4. Üçüncü Taraflar</h3>
                            <p>Mevzuat gereği veya hizmetin sunulması için gerekli durumlarda veriler, yetkili kurumlara
                                ve iş ortaklarına aktarılabilir.</p>

                            <h3>5. Haklarınız</h3>
                            <p>KVKK kapsamında kişisel verilerinizle ilgili haklarınızı kullanmak için bizimle iletişime
                                geçebilirsiniz.</p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
