import Layout from "@/components/layout/Layout"

export default function KvkkPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="KVKK Aydınlatma Metni">
            <section className="about-three about-six">
                <div className="container">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">KVKK</p>
                        </div>
                        <h2 className="section-title__title">Kişisel Verilerin Korunması Aydınlatma Metni</h2>
                    </div>
                    <div className="about-three__text">
                        <p>Voldem Sigorta Tokat (“Şirket”) olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu
                            (“KVKK”) uyarınca kişisel verilerinizin güvenliğine önem veriyoruz. Bu aydınlatma metni,
                            kişisel verilerinizin hangi amaçlarla işlendiğini, hukuki dayanaklarını, aktarım
                            süreçlerini ve haklarınızı açıklamak amacıyla hazırlanmıştır.</p>
                        <p><strong>İşlenen Kişisel Veriler:</strong> Kimlik (ad, soyad), iletişim (telefon, e-posta,
                            adres), poliçe ve işlem bilgileri, talep/başvuru kayıtları ile müşteri işlem verileri
                            işlenebilir.</p>
                        <p><strong>İşleme Amaçları:</strong> Tokat sigorta hizmetleri kapsamında teklif hazırlama,
                            poliçe düzenleme, hasar ve müşteri destek süreçlerini yürütme, yasal yükümlülüklerin
                            yerine getirilmesi, ürün ve hizmetlerimizin iyileştirilmesi amaçlarıyla işlenir.</p>
                        <p><strong>Hukuki Sebep:</strong> KVKK m.5 ve m.6’da belirtilen; sözleşmenin kurulması ve ifası,
                            hukuki yükümlülüklerin yerine getirilmesi, bir hakkın tesisi, kullanılması veya korunması
                            ve meşru menfaat hukuki sebeplerine dayanılır.</p>
                        <p><strong>Aktarım:</strong> Kişisel verileriniz, sigorta şirketleri, iş ortakları, hizmet
                            sağlayıcılar ve yasal olarak yetkili kamu kurumları ile sınırlı olarak paylaşılabilir.
                            Aktarım süreçleri KVKK’ya uygun güvenlik tedbirleriyle yürütülür.</p>
                        <p><strong>Saklama Süresi:</strong> Verileriniz, ilgili mevzuatta öngörülen süreler boyunca
                            veya işleme amacının gerektirdiği süreyle sınırlı olarak saklanır.</p>
                        <p><strong>Haklarınız:</strong> KVKK m.11 kapsamında; kişisel verilerinizin işlenip işlenmediğini
                            öğrenme, düzeltme, silme, işleme itiraz ve veri aktarımı hakkında bilgi alma haklarına
                            sahipsiniz. Taleplerinizi iletişim sayfamızdan veya e-posta üzerinden iletebilirsiniz.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
