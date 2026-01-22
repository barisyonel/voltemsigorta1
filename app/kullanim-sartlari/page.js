import Layout from "@/components/layout/Layout"

export default function TermsPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Kullanım Şartları">
                <section className="legal-page">
                    <div className="container">
                        <div className="section-title text-left">
                            <div className="section-title__tagline-box">
                                <p className="section-title__tagline">YASAL METİNLER</p>
                            </div>
                            <h2 className="section-title__title">Kullanım Şartları</h2>
                        </div>
                        <div className="legal-page__content">
                            <p>Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız. Şartları kabul
                                etmiyorsanız lütfen siteyi kullanmayınız.</p>

                            <h3>1. İçerik ve Hizmetler</h3>
                            <p>Sitede yer alan içerikler bilgilendirme amaçlıdır. Sigorta teklif ve hizmet detayları,
                                nihai olarak ilgili sözleşme ve poliçe koşullarına tabidir.</p>

                            <h3>2. Fikri Mülkiyet</h3>
                            <p>Site içeriği ve görsellerin tüm hakları saklıdır. İzinsiz kopyalama, dağıtım veya kullanım
                                yasaktır.</p>

                            <h3>3. Sorumluluk Sınırı</h3>
                            <p>Site kullanımı nedeniyle doğabilecek doğrudan/dolaylı zararlardan Şirket sorumlu değildir.</p>

                            <h3>4. Değişiklik</h3>
                            <p>Şirket, kullanım şartlarını önceden bildirmeksizin güncelleyebilir. Güncel metin sitede
                                yayınlandığı andan itibaren geçerlidir.</p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
