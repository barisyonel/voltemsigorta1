import Layout from "@/components/layout/Layout"

export default function KvkkPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="KVKK Aydınlatma Metni">
                <section className="legal-page">
                    <div className="container">
                        <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">YASAL METİNLER</p>
                            </div>
                            <h2 className="section-title__title">KVKK Aydınlatma Metni</h2>
                        </div>
                        <div className="legal-page__content">
                            <p>Voldem Sigorta Tokat (“Şirket”) olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu
                                (“KVKK”) kapsamında kişisel verilerinizin güvenliğine azami önem veriyoruz. Bu metin;
                                kişisel verilerinizin hangi amaçlarla işlendiği, kimlere aktarılabileceği, toplanma
                                yöntemleri ve haklarınıza ilişkin aydınlatma sağlar.</p>

                            <h3>1. Veri Sorumlusu</h3>
                            <p>Veri sorumlusu: Voldem Sigorta Tokat.</p>

                            <h3>2. İşlenen Kişisel Veriler</h3>
                            <p>Ad-soyad, iletişim bilgileri (telefon, e-posta), teklif/başvuru bilgileri, iletişim formu
                                kayıtları ve gerekli olduğu ölçüde sigortacılık süreçlerine ilişkin veriler işlenebilir.</p>

                            <h3>3. İşleme Amaçları</h3>
                            <p>Sigorta teklif/başvuru süreçlerinin yürütülmesi, müşteri ilişkileri yönetimi, talep ve
                                şikayetlerin yönetilmesi, bilgilendirme faaliyetleri ve yasal yükümlülüklerin yerine
                                getirilmesi amaçlarıyla işlenir.</p>

                            <h3>4. Toplama Yöntemi ve Hukuki Sebep</h3>
                            <p>Veriler; web sitesi formları, telefon, e-posta, WhatsApp ve yüz yüze iletişim kanalları
                                üzerinden toplanır. KVKK m.5 ve m.6 kapsamında sözleşmenin kurulması/ifası, hukuki
                                yükümlülüklerin yerine getirilmesi ve meşru menfaat sebeplerine dayanabilir.</p>

                            <h3>5. Aktarım</h3>
                            <p>Kişisel veriler; sigorta şirketleri, yetkili kamu kurumları ve hizmet sağlayıcılarla
                                mevzuata uygun şekilde paylaşılabilir.</p>

                            <h3>6. Saklama Süresi</h3>
                            <p>Veriler, ilgili mevzuatta öngörülen süreler boyunca saklanır; sürenin sonunda silinir,
                                yok edilir veya anonim hale getirilir.</p>

                            <h3>7. Haklarınız</h3>
                            <p>KVKK m.11 kapsamında kişisel verilerinize ilişkin bilgi talep etme, düzeltme, silme,
                                itiraz etme ve diğer haklara sahipsiniz. Başvurularınızı iletişim kanallarımız üzerinden
                                iletebilirsiniz.</p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
