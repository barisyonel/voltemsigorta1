'use client'

import { cloudinaryUrl } from "@/lib/cloudinary"
import { useMemo, useState } from "react"

const FALLBACK_IMAGE_URL = "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769696797/Gemini_Generated_Image_mp0vump0vump0vum_1_hvczvn.png"

/* SEO güçlü başlıklar - indirim, uygun sigorta vurgulu */
const SEO_TITLES = {
    "Hakkımızda": "Tokat'ta Uygun Sigorta Fiyatları ile 20 Yıllık Güven",
    "İletişim": "Tokat Sigorta Teklifi Al – İndirimli Fiyatlar için Hemen Ara",
    "Ekibimiz": "Tokat'ın En Uygun Sigorta Danışmanları ile Tanışın",
    "Blog": "Tokat Sigorta İndirimleri | Uygun Fiyat İpuçları ve Haberler",
    "Sıkça Sorulan Sorular": "Tokat Uygun Sigorta SSS – İndirim Nasıl Alınır?",
    "İş Yeri Sigortası": "Tokat İş Yeri Sigortası – Uygun Prim, İndirimli Teklif",
    "Araç Sigortası": "Tokat Araç Sigortası – En Uygun Trafik ve Kasko Fiyatları",
    "Kasko Sigortası": "Tokat Kasko İndirimi – Uygun Kasko Sigortası Teklifi",
    "Konut Sigortası": "Tokat Konut Sigortası – Uygun Fiyat, Hızlı Teklif",
    "DASK Sigortası": "Tokat DASK Sigortası – En Uygun Deprem Sigortası Fiyatı",
    "Sağlık Sigortası": "Tokat Özel Sağlık Sigortası – Uygun Prim, İndirimli Paketler",
    "Hayat Sigortası": "Tokat Hayat Sigortası – Aileniz İçin Uygun Güvence",
    "TARSIM Tarım Sigortası": "Tokat TARSIM – Devlet Desteği ile Uygun Tarım Sigortası",
    "Sigorta": "Tokat En Uygun Sigorta Fiyatları – Tüm Branşlarda İndirim",
}

const DEFAULT_DESCRIPTIONS = {
    "Hakkımızda": "2006'dan beri Tokat'ta uygun sigorta fiyatları ve indirimli teklifler. Maksimum müşteri memnuniyeti ile 20 yıldır hizmetinizdeyiz.",
    "İletişim": "Tokat'ta en uygun sigorta fiyatı için hemen teklif alın. İndirimli paketler, 7/24 destek. Hemen arayın!",
    "Ekibimiz": "Uygun sigorta teklifi için uzman danışmanlarımız yanınızda. Tokat'ta en iyi fiyat garantisi.",
    "Blog": "Tokat sigorta indirimleri, uygun fiyat ipuçları ve güncel haberler. Tasarruf etmek için okuyun!",
    "Sıkça Sorulan Sorular": "İndirim nasıl alınır? En uygun sigorta hangisi? Tokat sigorta SSS ile cevaplar.",
    "İş Yeri Sigortası": "Tokat'ta iş yeri sigortası indirimli fiyatlarla. Yangın, hırsızlık, doğal afet teminatı. Hızlı teklif!",
    "Araç Sigortası": "Tokat'ta en uygun trafik ve kasko sigortası. İndirimli prim, anında teklif. Karşılaştır, tasarruf et!",
    "Kasko Sigortası": "Tokat kasko sigortası uygun fiyat garantisi. İndirimli kasko teklifi alın, aracınızı güvence altına alın.",
    "Konut Sigortası": "Tokat konut sigortası en uygun fiyatlarla. Yangın, hırsızlık teminatı. İndirimli teklif için hemen başvurun.",
    "DASK Sigortası": "Tokat DASK sigortası zorunlu ve uygun fiyatlı. Deprem güvencesi için hemen teklif alın.",
    "Sağlık Sigortası": "Tokat özel sağlık sigortası indirimli paketler. Uygun prim, geniş teminat. Teklif alın!",
    "Hayat Sigortası": "Aileniz için uygun hayat sigortası. Tokat'ta indirimli primlerle geleceğinizi güvence altına alın.",
    "TARSIM Tarım Sigortası": "Tokat TARSIM devlet destekli uygun tarım sigortası. Dolu, don, yangın teminatı. Hemen teklif!",
    "Sigorta": "Tokat'ta tüm sigortalarda en uygun fiyat. Trafik, kasko, konut, sağlık – indirimli teklifler tek yerde!",
    "Çerez Politikası": "Çerez kullanımımız ve gizlilik tercihleriniz hakkında bilgi edinin.",
    "Gizlilik Politikası": "Kişisel verilerinizin korunması ve işlenmesi hakkında bilgiler.",
    "KVKK Aydınlatma Metni": "Kişisel verilerinizin işlenmesi ile ilgili KVKK aydınlatma metni.",
    "Product Details": "Ürün detayları ve uygun sigorta seçenekleri.",
    "Portfolio Classic": "Referans projelerimiz ve başarı hikayelerimiz.",
    "Portfolio Details": "Proje detayları ve çalışma süreçleri.",
    "All products": "Tüm sigorta ürünlerinde uygun fiyat ve indirim.",
    "Member Details": "Ekip üyemiz hakkında detaylı bilgi.",
    "404 Error": "Aradığınız sayfa bulunamadı.",
}

export default function Breadcrumb({ breadcrumbTitle, breadcrumbImage, breadcrumbDescription, breadcrumbSeoTitle }) {
    const [imgError, setImgError] = useState(false)
    const imageSrc = useMemo(() => {
        if (!breadcrumbImage) return FALLBACK_IMAGE_URL
        if (typeof breadcrumbImage === 'string' && (breadcrumbImage.startsWith('http://') || breadcrumbImage.startsWith('https://'))) {
            return breadcrumbImage
        }
        if (breadcrumbImage.startsWith?.('/')) return breadcrumbImage
        return cloudinaryUrl(breadcrumbImage)
    }, [breadcrumbImage])
    
    const displaySrc = imgError ? FALLBACK_IMAGE_URL : imageSrc
    const description = breadcrumbDescription || DEFAULT_DESCRIPTIONS[breadcrumbTitle] || "Tokat'ta en uygun sigorta fiyatları ve indirimli teklifler. Voldem Sigorta ile güvence altına alın."
    const seoTitle = breadcrumbSeoTitle || SEO_TITLES[breadcrumbTitle] || breadcrumbTitle || "Voldem Sigorta Tokat"
    
    return (
        <section className="page-header page-header--split">
            <div className="page-header__layout">
                <div className="page-header__content">
                    <h1 className="page-header__title">{seoTitle}</h1>
                    <p className="page-header__desc">{description}</p>
                </div>
                <div className="page-header__media">
                    <img
                        src={displaySrc}
                        alt={breadcrumbTitle ? `${breadcrumbTitle} - Voldem Sigorta Tokat` : "Voldem Sigorta Tokat"}
                        className="page-header__image"
                        loading="eager"
                        onError={() => setImgError(true)}
                    />
                </div>
            </div>
        </section>
    )
}
