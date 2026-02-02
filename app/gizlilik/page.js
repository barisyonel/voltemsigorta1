import Layout from "@/components/layout/Layout"

export const metadata = {
    title: "Gizlilik Politikası | Voldem Sigorta Tokat",
    description: "Voldem Sigorta Tokat gizlilik politikası. Kişisel verilerinizin korunması ve işlenmesi hakkında bilgiler.",
    alternates: { canonical: "/gizlilik" },
}

export default function GizlilikPage() {
    return (
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gizlilik Politikası">
            <section className="about-three about-six">
                <div className="container">
                    <div className="section-title text-left">
                        <div className="section-title__tagline-box">
                            <p className="section-title__tagline">GİZLİLİK</p>
                        </div>
                        <h2 className="section-title__title">Gizlilik Politikası</h2>
                    </div>
                    <div className="about-three__text">
                        <p>Voldem Sigorta Tokat, ziyaretçilerimizin ve müşterilerimizin gizliliğine önem verir.
                            Web sitemizi kullanırken paylaştığınız bilgiler, yalnızca hizmet kalitesini artırmak,
                            teklif süreçlerini yönetmek ve iletişim sağlamak amacıyla işlenir.</p>
                        <p><strong>Toplanan Bilgiler:</strong> İletişim formları üzerinden ad, soyad, telefon,
                            e-posta ve talep bilgileri toplanabilir. Ayrıca site deneyimini iyileştirmek için
                            anonim kullanım verileri işlenebilir.</p>
                        <p><strong>Bilgi Güvenliği:</strong> Kişisel verilerinizi korumak için teknik ve idari
                            güvenlik önlemleri uygularız. Yetkisiz erişimi önlemek için güncel güvenlik
                            standartlarını takip ederiz.</p>
                        <p><strong>Üçüncü Taraf Paylaşımı:</strong> Bilgileriniz, yalnızca poliçe süreçleri veya
                            yasal yükümlülükler kapsamında ilgili sigorta şirketleri ve yetkili kurumlarla
                            paylaşılabilir.</p>
                        <p><strong>Haklarınız:</strong> KVKK kapsamında verilerinizin düzeltilmesini, silinmesini
                            veya işlenmesine itiraz etmeyi talep edebilirsiniz. Başvurularınızı iletişim
                            sayfamız üzerinden bize iletebilirsiniz.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
