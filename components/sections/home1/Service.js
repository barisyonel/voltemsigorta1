'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const IMG = {
    saglik: "/assets/saglıksigortası.png",
    dask: "/assets/afet%20sigortası.png",
    konut: "/assets/konutsigortası.png",
    isyeri: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608282/Gemini_Generated_Image_j9v2h4j9v2h4j9v2_tj33cq.png",
    hayat: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608021/Gemini_Generated_Image_7qwvqa7qwvqa7qwv_ulwkuz.png",
}

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    loop: true,
    grabCursor: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.services-one__pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }



}

export default function Service() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const services = [
        {
            title: "Trafik Sigortası",
            href: "/arac-sigortasi",
            image: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540920/aracsigorta_kosjl4.png",
            icon: "icon-car-1",
            alt: "Tokat trafik sigortası - Voldem Sigorta araç ve zorunlu trafik sigortası teklifi",
            metaTitle: "Tokat Trafik Sigortası | Voldem Sigorta",
        },
        {
            title: "Kasko",
            href: "/kasko-sigortasi",
            image: "/assets/arackaskoo.png",
            icon: "icon-family-insurance",
            alt: "Tokat kasko sigortası - Aracınızı koruyun. Voldem Sigorta kasko teklifi",
            metaTitle: "Tokat Kasko Sigortası | Voldem Sigorta",
        },
        {
            title: "TARSIM",
            href: "/tarsim",
            image: "/assets/tarımsigorta.jpg",
            icon: "icon-protection",
            alt: "Tokat TARSIM tarım sigortası - Bitkisel ürün, hayvancılık, sera sigortası. Voldem Sigorta",
            metaTitle: "Tokat TARSIM Tarım Sigortası | Voldem Sigorta",
        },
        {
            title: "Özel Sağlık",
            href: "/saglik-sigortasi",
            image: IMG.saglik,
            icon: "icon-healthcare",
            alt: "Tokat özel sağlık sigortası - Geniş hastane ağı. Voldem Sigorta sağlık sigortası teklifi",
            metaTitle: "Tokat Özel Sağlık Sigortası | Voldem Sigorta",
        },
        {
            title: "Seyahat Sağlık",
            href: "/saglik-sigortasi",
            image: IMG.saglik,
            icon: "icon-healthcare",
            alt: "Tokat seyahat sağlık sigortası - Yurt dışı seyahat sigortası. Voldem Sigorta",
            metaTitle: "Tokat Seyahat Sağlık Sigortası | Voldem Sigorta",
        },
        {
            title: "DASK",
            href: "/dask-sigortasi",
            image: IMG.dask,
            icon: "icon-home-security",
            alt: "Tokat DASK deprem sigortası - Zorunlu deprem sigortası. Voldem Sigorta",
            metaTitle: "Tokat DASK Sigortası | Voldem Sigorta",
        },
        {
            title: "Konut Sigortası",
            href: "/konut-sigortasi",
            image: IMG.konut,
            icon: "icon-home-security",
            alt: "Tokat konut sigortası - Yangın, hırsızlık teminatları. Voldem Sigorta ev sigortası",
            metaTitle: "Tokat Konut Sigortası | Voldem Sigorta",
        },
        {
            title: "İşyeri Sigortası",
            href: "/isyeri-sigortasi",
            image: IMG.isyeri,
            icon: "icon-risk-management",
            alt: "Tokat işyeri sigortası - İşletme sigortası. Voldem Sigorta işyeri sigortası teklifi",
            metaTitle: "Tokat İşyeri Sigortası | Voldem Sigorta",
        },
        {
            title: "Ferdi Kaza",
            href: "/hayat-sigortasi",
            image: IMG.hayat,
            icon: "icon-investment",
            alt: "Tokat ferdi kaza sigortası - Hayat sigortası. Voldem Sigorta",
            metaTitle: "Tokat Ferdi Kaza ve Hayat Sigortası | Voldem Sigorta",
        },
        {
            title: "TARSİM",
            href: "/tarsim",
            image: "/assets/tarımsigorta.jpg",
            icon: "icon-protection",
            alt: "Tokat TARSIM tarım sigortası - Tarımsal üretim sigortası. Voldem Sigorta",
            metaTitle: "Tokat TARSIM Tarım Sigortası | Voldem Sigorta",
        },
    ]
    return (
        <>

     {/* Services One Start  */}
        <section className="services-one" aria-labelledby="services-one-title">
            <div className="services-one__shape-1 float-bob-x" aria-hidden="true">
                <span className="services-one__shape-placeholder" />
            </div>
            <div className="services-one__shape-2 rotate-me" aria-hidden="true">
                <span className="services-one__shape-placeholder" />
            </div>
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">HİZMETLERİMİZ</p>
                    </div>
                    <h2 id="services-one-title" className="section-title__title">Sigorta,
                        <br/> hayatınızın yatırımıdır!</h2>
                    <p className="section-title__text">Voldem Sigorta olarak hızlı, kolay ve güvenli bir hizmet sunuyoruz.
                        Tokat ve çevre illerde ihtiyaçlarınıza uygun sigorta seçeneklerini karşılaştırıyoruz.
                        <Link href="/dask-sigortasi">Tokat DASK</Link>, <Link href="/kasko-sigortasi">Tokat araç kasko</Link> ve 
                        <Link href="/saglik-sigortasi">Tokat sağlık sigortası</Link> gibi kritik alanlarda net karşılaştırmalar
                        sunarak doğru poliçeyi seçmenize yardımcı oluyoruz. <Link href="/arac-sigortasi">Araç sigortası</Link>, 
                        <Link href="/konut-sigortasi">konut sigortası</Link>, <Link href="/hayat-sigortasi">hayat sigortası</Link> ve 
                        <Link href="/isyeri-sigortasi">işletme sigortası</Link> için de <Link href="/iletisim">hızlı teklif</Link> alabilirsiniz.</p>
                </div>
                <div className="services-one__bottom">
                    {!isMounted ? (
                        <div className="services-one__carousel">
                            {services.map((service) => (
                                <div className="item" key={`${service.title}-${service.image}`}>
                                    <div className="services-one__single">
                                        <div className="services-one__title-box">
                                            <h3 className="services-one__title"><Link href={service.href} title={service.metaTitle || service.title}>{service.title}</Link>
                                            </h3>
                                        </div>
                                        <div className="services-one__img-box">
                                            <div className="services-one__img">
                                                <img 
                                                    src={service.image} 
                                                    alt={service.alt || service.title}
                                                    title={service.metaTitle || service.title}
                                                    width={400}
                                                    height={300}
                                                    loading="lazy"
                                                    suppressHydrationWarning
                                                />
                                            </div>
                                            <div className="services-one__icon">
                                                <span className={service.icon}></span>
                                            </div>
                                        </div>
                                        <div className="services-one__read-more">
                                            <Link href={service.href}>Detaylar<span className="icon-next"></span></Link>
                                        </div>
                                        <div className="services-one__btn-box">
                                            <Link href="/iletisim" className="services-one__btn thm-btn">Teklif Al</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <Swiper {...swiperOptions} className="services-one__carousel">
                                {services.map((service) => (
                                    <SwiperSlide className="item" key={`${service.title}-${service.image}`}>
                                        <div className="services-one__single">
                                            <div className="services-one__title-box">
                                                <h3 className="services-one__title"><Link href={service.href} title={service.metaTitle || service.title}>{service.title}</Link>
                                                </h3>
                                            </div>
                                            <div className="services-one__img-box">
                                                <div className="services-one__img">
                                                    <img 
                                                        src={service.image} 
                                                        alt={service.alt || service.title}
                                                        title={service.metaTitle || service.title}
                                                        width={400}
                                                        height={300}
                                                        loading="lazy"
                                                        suppressHydrationWarning
                                                    />
                                                </div>
                                                <div className="services-one__icon">
                                                    <span className={service.icon}></span>
                                                </div>
                                            </div>
                                            <div className="services-one__read-more">
                                                <Link href={service.href}>Detaylar<span className="icon-next"></span></Link>
                                            </div>
                                            <div className="services-one__btn-box">
                                                <Link href="/iletisim" className="services-one__btn thm-btn">Teklif Al</Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="swiper-pagination services-one__pagination"></div>
                        </>
                    )}
                </div>
            </div>
        </section>
        {/* Services One End  */}
        </>
    )
}
