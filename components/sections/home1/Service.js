'use client'
import { useState, useEffect } from "react"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { cloudinaryUrl } from "@/lib/cloudinary"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
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
            href: "sigorta",
            image: "https://res.cloudinary.com/dznv8z7wo/image/upload/v1769540934/tarsim_qrmyqu.png",
            icon: "icon-protection",
        },
        {
            title: "Özel Sağlık",
            href: "saglik-sigortasi",
            image: cloudinaryUrl("/assets/images/ozel.png"),
            icon: "icon-healthcare",
        },
        {
            title: "Seyahat Sağlık",
            href: "saglik-sigortasi",
            image: cloudinaryUrl("/assets/images/services/insurence-1-4.jpg"),
            icon: "icon-healthcare",
        },
        {
            title: "DASK",
            href: "dask-sigortasi",
            image: cloudinaryUrl("/assets/images/dask-1.png"),
            icon: "icon-home-security",
        },
        {
            title: "Konut Sigortası",
            href: "konut-sigortasi",
            image: cloudinaryUrl("/assets/images/konut.png"),
            icon: "icon-home-security",
        },
        {
            title: "İşyeri Sigortası",
            href: "isyeri-sigortasi",
            image: cloudinaryUrl("/assets/images/yangin.png"),
            icon: "icon-risk-management",
        },
        {
            title: "Ferdi Kaza",
            href: "hayat-sigortasi",
            image: cloudinaryUrl("/assets/images/hayat.png"),
            icon: "icon-investment",
        },
        {
            title: "TARSİM",
            href: "sigorta",
            image: cloudinaryUrl("/assets/images/tarsim.png"),
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
                        Tokat DASK, Tokat araç kasko ve Tokat sağlık sigortası gibi kritik alanlarda net karşılaştırmalar
                        sunarak doğru poliçeyi seçmenize yardımcı oluyoruz.</p>
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
                                                />
                                            </div>
                                            <div className="services-one__icon">
                                                <span className={service.icon}></span>
                                            </div>
                                        </div>
                                        <div className="services-one__read-more">
                                            <Link href={service.href}>Detaylar<span className="icon-next"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
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
                                                />
                                            </div>
                                            <div className="services-one__icon">
                                                <span className={service.icon}></span>
                                            </div>
                                        </div>
                                        <div className="services-one__read-more">
                                            <Link href={service.href}>Detaylar<span className="icon-next"></span></Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
        {/* Services One End  */}
        </>
    )
}
