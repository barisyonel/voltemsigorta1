import Link from "next/link"

/**
 * Server-rendered SEO intro block – 250+ kelime, JS olmadan HTML'de görünür.
 * SEO araçları JavaScript çalıştırmadığında bile bu metin tespit edilir.
 */
export default function SeoIntro() {
    return (
        <article className="seo-intro" aria-label="Tokat sigorta hizmeti tanıtımı">
            <h2 className="seo-intro__title">Tokat&apos;ta Güvenilir Sigorta Çözümleri – Voldem Sigorta</h2>
            <p>
                Tokat sigorta ihtiyaçlarınız için tek adres: <Link href="/hakkimizda">Voldem Sigorta Tokat</Link>. 2006&apos;dan beri Tokat ve çevre illerde{" "}
                <Link href="/arac-sigortasi">trafik sigortası</Link>, <Link href="/kasko-sigortasi">kasko</Link>, <Link href="/konut-sigortasi">konut sigortası</Link>, <Link href="/dask-sigortasi">DASK</Link>, <Link href="/saglik-sigortasi">sağlık sigortası</Link>, hayat sigortası ve işletme sigortası{" "}
                alanlarında hizmet veriyoruz. En uygun sigorta fiyatları için birden fazla sigorta şirketinden karşılaştırmalı
                teklif alıyor, size en iyi prim ve teminat seçeneğini sunuyoruz.
            </p>
            <p>
                Tokat trafik sigortası ve Tokat kasko fiyatları konusunda şeffaf bir yaklaşım benimsiyoruz. Araç sigortası
                yenileme zamanınız yaklaştığında sizi bilgilendiriyor, son dakika baskısı olmadan karşılaştırma yapmanızı
                sağlıyoruz. <Link href="/konut-sigortasi">Tokat konut sigortası</Link> ve Tokat DASK ihtiyaçlarınız için adres bazlı risk analizi yapıyor,
                yangın, deprem, hırsızlık ve su baskını teminatlarını bütçenize uygun şekilde kurguluyoruz.
            </p>
            <p>
                Tokat sağlık sigortası, özel sağlık sigortası ve seyahat sağlık sigortası teklifleri için aile yapınıza
                ve ihtiyaçlarınıza göre çözümler sunuyoruz. <Link href="/tarsim">Tokat TARSIM sigortası</Link> ile tarım işletmenizi, <Link href="/isyeri-sigortasi">işyeri sigortası</Link> ile işletmenizi güvence altına almanıza yardımcı oluyoruz. Hasar süreçlerinde yanınızda
                olarak bildirim, ekspertiz ve ödeme takibinde size rehberlik ediyoruz. Ücretsiz sigorta teklifi almak
                için <Link href="/iletisim">hemen iletişime geçin</Link>.
            </p>
            <p>
                Tokat sigorta fiyatları ve sigorta teklifi karşılaştırması yaparken sadece prim tutarına değil, teminat
                limitleri, muafiyet oranları ve hasar anındaki destek süreçlerine de dikkat ediyoruz. Doğru poliçe
                seçimi uzun vadede tasarruf sağlar. Voldem Sigorta Tokat olarak Tokat&apos;ın güvenilir sigorta acentesi
                olarak hizmet veriyor, müşteri memnuniyetini ön planda tutuyoruz.
            </p>
        </article>
    )
}
