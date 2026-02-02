import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "Tokat Sigorta İletişim | Teklif Al - Voldem Sigorta Tokat",
    description: "Voldem Sigorta Tokat iletişim bilgileri. Tokat merkez ofisimizden bize ulaşın. Telefon, e-posta ve WhatsApp ile hızlı teklif alın. Gop Bulvarı No:192 Tüfekçiler İş Hanı Kat:3 D:25",
    keywords: [
        "tokat sigorta iletişim",
        "voldem sigorta telefon",
        "tokat sigorta adresi",
        "tokat sigorta teklif",
        "Voldem Sigorta Tokat iletişim",
        "tokat sigorta acentesi adres",
    ],
    openGraph: {
        title: "İletişim | Voldem Sigorta Tokat",
        description: "Voldem Sigorta Tokat iletişim bilgileri. Bize ulaşın, hızlı teklif alın.",
        images: [
            {
                url: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540889/hakk%C4%B1m%C4%B1zda_kudnpv.png",
                width: 1200,
                height: 630,
                alt: "Voldem Sigorta Tokat İletişim",
            },
        ],
    },
    alternates: { canonical: "/iletisim" },
}

export default function Home() {

    return (
        <>
        <Layout
            headerStyle={1}
            footerStyle={1}
            breadcrumbTitle="İletişim"
            breadcrumbImage="https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540889/hakk%C4%B1m%C4%B1zda_kudnpv.png"
        >
        {/* Contact Page Start */}
        <section className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="contact-page__left">
                            <h3 className="contact-page__title">Bize Ulaşın</h3>
                            <p className="contact-page__text">Tokat ve çevre illerde sigorta ihtiyaçlarınız için hızlı
                                teklif ve güvenilir danışmanlık sağlıyoruz.</p>
                            <div className="contact-page__contact-info">
                                <h4 className="contact-page__contact-info-title">İletişim Bilgileri</h4>
                                <ul className="contact-page__contact-list list-unstyled">
                                    <li>
                                        <h5>Adres</h5>
                                        <p>Tokat Merkez, Türkiye
                                            <br/> Gop Bulvarı No:192
                                            <br/> Tüfekçiler İş Hanı Kat:3 D:25</p>
                                    </li>
                                    <li>
                                        <h5>Telefon</h5>
                                        <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                                    </li>
                                    <li>
                                        <h5>E-posta</h5>
                                        <p><Link href="mailto:info@voldemsigorta.com">info@voldemsigorta.com</Link></p>
                                    </li>
                                    <li>
                                        <h5>WhatsApp</h5>
                                        <p><Link href="https://wa.me/905433950213">+90 543 395 02 13</Link></p>
                                    </li>
                                </ul>
                                <Link href="https://tokatsigorta.com" className="contact-page__link">tokatsigorta.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="contact-page__map-section" style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <h4 className="contact-page__contact-info-title" style={{ marginBottom: "16px" }}>Harita ve Ulaşım</h4>
                        <div style={{ 
                            borderRadius: "16px", 
                            overflow: "hidden", 
                            border: "1px solid rgba(107, 53, 214, 0.15)",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                        }}>
                            <iframe
                                src="https://www.google.com/maps?q=40.3168,36.5512&z=18&output=embed"
                                width="100%"
                                height="320"
                                style={{ border: 0, display: "block" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Voldem Sigorta Tokat - Konum"
                            />
                            <div style={{ 
                                padding: "16px 20px", 
                                background: "linear-gradient(135deg, #f8f7ff 0%, #f4f5fb 100%)",
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "12px"
                            }}>
                                <p style={{ margin: 0, fontSize: "15px", color: "#4b5563" }}>
                                    Gop Bulvarı No:192, Tüfekçiler İş Hanı Kat:3 D:25, Tokat
                                </p>
                                <a 
                                    href="https://www.google.com/maps?q=40.3168,36.5512" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="thm-btn"
                                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", flexShrink: 0 }}
                                >
                                    <i className="fas fa-external-link-alt"></i>
                                    Adrese Git
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-page__bottom">
                    <div className="whatsapp-quote-section">
                        <div className="whatsapp-quote-box">
                            <div className="whatsapp-quote-icon">
                                <i className="fab fa-whatsapp" style={{fontSize: '64px', color: '#ffffff'}}></i>
                            </div>
                            <h3 className="whatsapp-quote-title">WhatsApp ile Hızlı Fiyat Alın</h3>
                            <p className="whatsapp-quote-text">
                                Sigorta teklifi almak için WhatsApp üzerinden bize ulaşın. 
                                <br/>Hızlı ve kolay bir şekilde size özel teklif hazırlayalım.
                            </p>
                            <div className="whatsapp-quote-buttons">
                                <Link 
                                    href="https://wa.me/905433950213?text=Merhaba,%20sigorta%20teklifi%20almak%20istiyorum.%20Bilgi%20verebilir%20misiniz?" 
                                    className="thm-btn whatsapp-quote-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-whatsapp" style={{marginRight: '8px', fontSize: '20px'}}></i>
                                    WhatsApp ile Fiyat Al
                                </Link>
                            </div>
                            <div className="whatsapp-quote-info">
                                <p>
                                    <strong>Çalışma Saatleri:</strong> Pazartesi - Cuma: 09:00 - 18:00<br/>
                                    <strong>Yanıt Süresi:</strong> Genellikle 1 saat içinde yanıt veriyoruz
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Contact Page End */} 

            </Layout>
        </>
    )
}