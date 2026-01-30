import Link from "next/link"

export default function HomeCta() {
    return (
        <section className="home-cta">
            <div className="container">
                <div className="home-cta__inner">
                    <div className="home-cta__content">
                        <h2 className="home-cta__title">Ücretsiz Sigorta Teklifi Alın</h2>
                        <p className="home-cta__text">Trafik, kasko, konut, sağlık veya DASK sigortası için hemen teklif alın. Uzman ekibimiz 15+ sigorta şirketinden karşılaştırmalı fiyat sunar.</p>
                        <div className="home-cta__buttons">
                            <a href="https://wa.me/905433950213?text=Merhaba%2C%20sigorta%20teklifi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="home-cta__btn home-cta__btn--primary thm-btn">WhatsApp ile Teklif Al</a>
                            <Link href="/iletisim" className="home-cta__btn home-cta__btn--outline">İletişime Geç</Link>
                        </div>
                    </div>
                    <div className="home-cta__contact">
                        <p><strong>Hemen Arayın:</strong> <a href="tel:+905433950213">+90 543 395 02 13</a></p>
                        <p><strong>Adres:</strong> Gop Bulvarı No:192, Tüfekçiler İş Hanı Kat:3 D:25, Tokat</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
