'use client'
import Link from "next/link"
import Image from "next/image"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

const ABOUT_SLIDES = [
    { image: "/assets/slider/slider5.jpg", width: 800, height: 1200, alt: "Tokat trafik sigortası ve kasko - Açılışa özel indirim, Voldem Sigorta araç sigortası teklifi", title: "Tokat Trafik Sigortası ve Kasko | Voldem Sigorta" },
    { image: "/assets/slider/slider1.jpg", width: 800, height: 1200, alt: "Geleceğine yatırım yap - Tokat sigorta acentesi Voldem Sigorta, açılışa özel %10 indirim", title: "Geleceğine Yatırım Yap | Voldem Sigorta Tokat" },
    { image: "/assets/arackasko.png", width: 800, height: 1200, alt: "Tokat kasko sigortası - 5 dakikada kaskonu yap, Kasko için fazla düşünme. Voldem Sigorta araç sigortası teklifi", title: "5 Dakikada Kasko | Kasko Sigortası - Voldem Sigorta Tokat" },
]

const aboutSwiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { clickable: true },
}

export default function About() {
    return (
        <>

        {/* About One Start  */}
        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <div className="about-one__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-one__img">
                                    <Swiper {...aboutSwiperOptions} className="about-one__slider">
                                        {ABOUT_SLIDES.map((slide) => (
                                            <SwiperSlide key={slide.image} className="about-one__slider-slide">
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.alt}
                                                    title={slide.title}
                                                    width={slide.width}
                                                    height={slide.height}
                                                    sizes="(max-width: 991px) 100vw, 50vw"
                                                    loading="lazy"
                                                    className="about-one__slider-img"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">Sigortanın Adresi</p>
                                </div>
                                <h2 className="section-title__title">Sigortanızla
                                    Hayatınızı Koruyun!</h2>
                            </div>
                            <p className="about-one__text-1">Sigorta, belirli bir risk karşısında kişilerin veya
                                kuruluşların maddi zararlarını korumak için yapılan sözleşmeye dayalı
                                bir finansal üründür. Voldem Sigorta Tokat olarak, 2006'dan beri Tokat ve çevre illerde 
                                güvenilir sigorta hizmetleri sunuyoruz. 20 senedir insanlara güvenle sigorta hizmeti veriyoruz.</p>
                            <p className="about-one__text-1">Voldem Sigorta olarak hızlı, kolay ve güvenli hizmet
                                sunmayı hedefliyoruz. <Link href="/dask-sigortasi"><strong>Tokat DASK</strong></Link>, 
                                <Link href="/kasko-sigortasi"><strong>Tokat araç kasko</strong></Link> ve
                                <Link href="/saglik-sigortasi"><strong>Tokat sağlık sigortası</strong></Link> gibi ihtiyaçlarda, 
                                Tokat ve çevre illerde en doğru sigorta çözümlerini karşılaştırarak sizin için uygun seçeneği belirliyoruz. 
                                <Link href="/arac-sigortasi">Trafik sigortası</Link>, <Link href="/konut-sigortasi">konut sigortası</Link>, 
                                <Link href="/hayat-sigortasi">hayat sigortası</Link> ve <Link href="/isyeri-sigortasi">işletme sigortası</Link> 
                                alanlarında geniş bir hizmet yelpazesi sunuyoruz.</p>
                            <p className="about-one__text-1">Tokat sigorta fiyatları konusunda şeffaf bir yaklaşım benimsiyoruz. 
                                Size en uygun <Link href="/sigorta">sigorta teklifi</Link> için detaylı bir ihtiyaç analizi yapıyor, 
                                bütçenize uygun çözümler sunuyoruz. Hasar süreçlerinde de yanınızdayız ve hızlı çözümler üretiyoruz.</p>
                            <div className="about-one__text-box">
                                <div className="about-one__text-box-icon">
                                    <span className="icon-file-1"></span>
                                </div>
                                <p className="about-one__text-box-text">Voldem Sigorta olarak hızın, işlemleri kolayca
                                    yapmanın ve her zaman yanınızda olmanın ne kadar önemli olduğunu biliyoruz.</p>
                            </div>
                            <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Hızlı ve Güvenli İşlem</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>İhtiyaca Uygun Çözümler</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="fas fa-check-circle"></span>
                                    </div>
                                    <p>Güvenilir Hizmet</p>
                                </li>
                            </ul>
                            <div className="about-one__btn-and-contact">
                                <div className="about-one__btn-box">
                                    <Link href="/hakkimizda" className="about-one__btn thm-btn">Daha Fazlası</Link>
                                </div>
                                <div className="about-one__contact">
                                    <div className="icon">
                                        <span className="icon-telephone"></span>
                                    </div>
                                    <div className="content">
                                    <span>Bizi Arayın</span>
                                    <p><Link href="tel:+905433950213">+90 543 395 02 13</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About One End  */}
        </>
    )
}
