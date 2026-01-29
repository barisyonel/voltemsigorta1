'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { cloudinaryUrl } from "@/lib/cloudinary"

const IMG = {
    saglik: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608114/Gemini_Generated_Image_jplo75jplo75jplo_oymqfx.png",
    dask: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608268/Gemini_Generated_Image_u55xp0u55xp0u55x_ootnnu.png",
    konut: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769608268/Gemini_Generated_Image_u55xp0u55xp0u55x_ootnnu.png",
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
            href: "arac-sigortasi",
            image: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540920/aracsigorta_kosjl4.png",
            icon: "icon-car-1",
        },
        {
            title: "Kasko",
            href: "kasko-sigortasi",
            image: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769554506/sigorta_bl8jr0.jpg",
            icon: "icon-family-insurance",
        },
        {
            title: "TARSIM",
            href: "tarsim",
            image: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540934/tarsim_qrmyqu.png",
            icon: "icon-protection",
        },
        {
            title: "Özel Sağlık",
            href: "saglik-sigortasi",
            image: IMG.saglik,
            icon: "icon-healthcare",
        },
        {
            title: "Seyahat Sağlık",
            href: "saglik-sigortasi",
            image: IMG.saglik,
            icon: "icon-healthcare",
        },
        {
            title: "DASK",
            href: "dask-sigortasi",
            image: IMG.dask,
            icon: "icon-home-security",
        },
        {
            title: "Konut Sigortası",
            href: "konut-sigortasi",
            image: IMG.konut,
            icon: "icon-home-security",
        },
        {
            title: "İşyeri Sigortası",
            href: "isyeri-sigortasi",
            image: IMG.isyeri,
            icon: "icon-risk-management",
        },
        {
            title: "Ferdi Kaza",
            href: "hayat-sigortasi",
            image: IMG.hayat,
            icon: "icon-investment",
        },
        {
            title: "TARSİM",
            href: "tarsim",
            image: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540934/tarsim_qrmyqu.png",
            icon: "icon-protection",
        },
    ]
    return (
        <>

     {/* Services One Start  */}
        <section className="services-one">
            <div className="services-one__shape-1 float-bob-x">
                <img src={cloudinaryUrl("assets/images/shapes/services-one-shape-1.png")} alt="" suppressHydrationWarning/>
            </div>
            <div className="services-one__shape-2 rotate-me">
                <img src={cloudinaryUrl("assets/images/shapes/services-one-shape-2.png")} alt="" suppressHydrationWarning/>
            </div>
            <div className="container">
                <div className="section-title text-left">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">HİZMETLERİMİZ</p>
                    </div>
                    <h2 className="section-title__title">Sigorta,
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
                                            <h3 className="services-one__title"><Link href={service.href}>{service.title}</Link>
                                            </h3>
                                        </div>
                                        <div className="services-one__img-box">
                                            <div className="services-one__img">
                                                <img 
                                                    src={service.image} 
                                                    alt={service.title}
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
                                                <h3 className="services-one__title"><Link href={service.href}>{service.title}</Link>
                                                </h3>
                                            </div>
                                            <div className="services-one__img-box">
                                                <div className="services-one__img">
                                                    <img 
                                                        src={service.image} 
                                                        alt={service.title}
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
