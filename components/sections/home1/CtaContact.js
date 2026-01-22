export default function CtaContact() {
    return (
        <>
            <section className="cta-one cta-five">
                <div className="container">
                    <div className="cta-one__inner">
                        <div
                            className="cta-one__bg"
                            style={{ backgroundImage: 'url(assets/images/shapes/cta-three-bg-shape-2.png)' }}
                        ></div>
                        <div className="cta-one__title-box">
                            <h3>Hemen <span>Arayın</span> veya WhatsApp'tan Teklif Alın</h3>
                            <p>Tokat ve çevre iller için hızlı teklif, net bilgi ve güvenilir destek.</p>
                        </div>
                        <div className="cta-one__btn-box" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                            <a href="tel:+905433950213" className="cta-one__btn thm-btn">HEMEN ARA</a>
                            <a
                                href="https://wa.me/905433950213?text=Merhaba%2C%20sigorta%20teklifi%20almak%20istiyorum."
                                className="cta-one__btn thm-btn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WHATSAPP'TAN TEKLİF AL
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
