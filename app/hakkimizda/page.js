'use client'
import CounterUp from "@/components/elements/CounterUp"
import BrandSlider from "@/components/slider/BrandSlider"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

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



export default function About() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Hakkımızda">
        {/* Feature One Start  */}
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    {/* Feature One Single Start */}
                    <div className="col-xl-4 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-protection"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Sigorta Acentesi</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Önce Güven</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">DETAYLAR<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature One Single End */}
                    {/* Feature One Single Start */}
                    <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-investment"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Sigorta Acentesi</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Birikiminizi Koruyun</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">DETAYLAR<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature One Single End */}
                    {/* Feature One Single Start */}
                    <div className="col-xl-4 col-lg-6 wow fadeInRight" data-wow-delay="100ms">
                        <div className="feature-one__single">
                            <div className="feature-one__shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-shape-1.png)' }} ></div>
                            <div className="feature-one__hover-shape-1"
                                style={{ backgroundImage: 'url(assets/images/shapes/feature-one-hover-shape-1.png)' }} >
                            </div>
                            <div className="feature-one__icon">
                                <span className="icon-risk-management"></span>
                            </div>
                            <div className="feature-one__content">
                                <p className="feature-one__sub-title">Sigorta Acentesi</p>
                                <h3 className="feature-one__title"><Link href="hakkimizda">Sigortanızı Hemen Başlatın</Link></h3>
                                <Link href="hakkimizda" className="feature-one__read-more">DETAYLAR<span
                                        className="icon-next"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/* Feature One Single End */}
                </div>
            </div>
        </section>
        {/* Feature One End  */}

        {/* About Three Start  */}
        <section className="about-three about-six">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-three__left">
                            <div className="about-three__img-box  wow slideInLeft" data-wow-delay="100ms"
                                data-wow-duration="2500ms">
                                <div className="about-three__img">
                                    <img src="/anasayfa2.jpg" alt=""/>
                                </div>
                                <div className="about-three__img-2">
                                    <img src="assets/images/tarsim.png" alt=""/>
                                </div>
                                <div className="about-three__img-3">
                                    <img src="assets/images/yangın.png" alt=""/>
                                </div>
                                <div className="about-three__shape-1">
                                    <img src="assets/images/shapes/about-three-shape-1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <p className="section-title__tagline">VOLDEM SİGORTA TOKAT'I TANIYIN</p>
                                </div>
                                <h2 className="section-title__title">Uzmanlarımızla
                                    <br/> Sigorta Çözümü Alın</h2>
                            </div>
                            <p className="about-three__text">2022 yılında Tokat’ta temelleri atılan Voldem Sigorta Aracılık
                                Hizmetleri, bireysel ve kurumsal segmentte sigortacılığa yeni bir soluk getirmek amacıyla
                                yola çıktı. Kuruluşumuzdan bu yana sadece bir aracı kurum değil, sigortalılarımızın hayat
                                boyu yanlarında hissettikleri güvenilir bir iş ortağı olmayı hedefliyoruz.</p>
                            <p className="about-three__text">Sigortacılığı sadece poliçe satışı değil, risk yönetimi sanatı
                                olarak görüyoruz. Maksimum müşteri memnuniyeti ilkemizle en karmaşık ihtiyaçlara dahi
                                şeffaf ve anlaşılır çözümler üretir; müşterilerimizin haklarını savunur ve en doğru
                                kararları almalarına rehberlik ederiz.</p>
                            <div className="about-three__award-box">
                                <div className="icon">
                                    <span className="icon-trophy"></span>
                                </div>
                                <div className="content">
                                    <h3>Vizyonumuz</h3>
                                    <p>Teknolojik gelişmeleri ve yenilikleri takip ederek, butik hizmet anlayışıyla
                                        sigortacılık sektöründe fark yaratan, lider bir aracı kurum olmak.</p>
                                </div>
                            </div>
                            <div className="about-three__award-box">
                                <div className="icon">
                                    <span className="icon-trophy"></span>
                                </div>
                                <div className="content">
                                    <h3>Misyonumuz</h3>
                                    <p>Müşterilerimizin ihtiyaçlarını analiz ederek en uygun ve kaliteli ürünleri sunmak;
                                        dürüstlük, şeffaflık ve etik değerlerden ödün vermeden her adımda güven inşa
                                        etmek.</p>
                                </div>
                            </div>
                            <div className="about-three__progress">
                                <h4 className="about-three__progress-title">Hizmet Deneyimi</h4>
                                <div className="bar">
                                    <div className="bar-inner count-bar" data-percent="100%" style={{width: '100%'}}>
                                        <div className="count-text">100%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Three End  */}

        {/* Counter One Start  */}
        <section className="counter-one">
            <div className="counter-one__shape-1 float-bob-x">
                <img src="assets/images/shapes/counter-one-shape-1.png" alt=""/>
            </div>
            <div className="counter-one__shape-2 float-bob-y">
                <img src="assets/images/shapes/counter-one-shape-2.png" alt=""/>
            </div>
            <div className="counter-one__shape-3 float-bob-x">
                <img src="assets/images/shapes/counter-one-shape-3.png" alt=""/>
            </div>
            <div className="counter-one__shape-4 float-bob-y">
                <img src="assets/images/shapes/counter-one-shape-4.png" alt=""/>
            </div>
            <div className="counter-one__shape-5 img-bounce">
                <img src="assets/images/shapes/counter-one-shape-5.png" alt=""/>
            </div>
            <div className="counter-one__shape-6 float-bob-y">
                <img src="assets/images/shapes/counter-one-shape-6.png" alt=""/>
            </div>
            <div className="counter-one__shape-7 float-bob-x">
                <img src="assets/images/shapes/counter-one-shape-7.png" alt=""/>
            </div>
            <div className="container">
                <div className="counter-one__inner">
                    <ul className="counter-one__count-list list-unstyled">
                        <li className="wow fadeInLeft" data-wow-delay="100ms">
                            <div className="counter-one__icon">
                                <span className="icon-team"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <CounterUp end={250} />
                                <span>+</span>
                            </div>
                            <p className="counter-one__text">Aktif Ekip Üyesi</p>
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="200ms">
                            <div className="counter-one__icon">
                                <span className="icon-insurance"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <CounterUp end={90} />
                                <span>+</span>
                            </div>
                            <p className="counter-one__text">Düzenlenen Poliçe</p>
                        </li>
                        <li className="wow fadeInDown" data-wow-delay="300ms">
                            <div className="counter-one__icon">
                                <span className="icon-rating"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <CounterUp end={2.56} />
                                <span>k</span>
                            </div>
                            <p className="counter-one__text">Memnun Müşteri</p>
                        </li>
                        <li className="wow fadeInRight" data-wow-delay="400ms">
                            <div className="counter-one__icon">
                                <span className="icon-team"></span>
                            </div>
                            <div className="counter-one__count count-box">
                                <CounterUp end={99} />
                                <span>%</span>
                            </div>
                            <p className="counter-one__text">Başarı Oranı</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* Counter One End  */}

        {/* Why Choose Three Start */}
        <section className="why-choose-three why-choose-five">
            <div className="why-choose-three__shape-1">
                <img src="assets/images/shapes/why-choose-five-shape-1.png" alt=""/>
            </div>
            <div className="why-choose-three__shape-2 img-bounce">
                <img src="assets/images/shapes/why-choose-five-shape-2.png" alt=""/>
            </div>
            <div className="why-choose-three__shape-3 float-bob-x">
                <img src="assets/images/shapes/why-choose-five-shape-3.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">NEDEN VOLDEM SİGORTA</p>
                    </div>
                    <h2 className="section-title__title">Bizi Diğerlerinden
                        <br/> Farklı Kılan Nedir?</h2>
                </div>
                <div className="row">
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-save-money-1"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="hakkimizda">Tam Güvence</Link></h3>
                                <p>İhtiyacınıza uygun poliçe yapısıyla risklerinizi en aza indirir, sizi güvenceye alır.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className=" icon-cashback"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="hakkimizda">Şeffaf Süreç</Link></h3>
                                <p>Tüm adımlarda net bilgi paylaşır, güvenle ilerlemenizi sağlar.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-bar-chart"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="hakkimizda">Hızlı İşlem</Link></h3>
                                <p>Başvuru ve teklif süreçlerini kısa sürede sonuçlandırırız.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                    {/* Why Choose Three Single Start */}
                    <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay="900ms">
                        <div className="why-choose-three__single">
                            <div className="why-choose-three__icon">
                                <span className="icon-save-money-1"></span>
                            </div>
                            <div className="why-choose-three__content">
                                <h3><Link href="hakkimizda">Esnek Çözümler</Link></h3>
                                <p>Farklı bütçe ve ihtiyaçlara uygun seçenekler sunarız.</p>
                            </div>
                        </div>
                    </div>
                    {/* Why Choose Three Single End */}
                </div>
            </div>
        </section>
        {/* Why Choose Three End */}

        {/* Testimonial One Start  */}
        <section className="testimonial-one testimonial-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">MÜŞTERİLERİMİZDEN YORUMLAR</p>
                    </div>
                    <h2 className="section-title__title">Müşterilerimiz Neden
                        <br/> Bizi Tercih Ediyor?</h2>
                </div>
                <div className="testimonial-one__bottom">
                
                    <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel thm-owl__carousel">
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="musteri-yorumlari">Ononto Khan</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-2.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="musteri-yorumlari">Smith S.R</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-3.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="musteri-yorumlari">Alisha
                                            Martin</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-4.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="musteri-yorumlari">David Koper</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-5.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="musteri-yorumlari">Jecika Brown</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                        {/* Testimonial One Single Start */}
                        <SwiperSlide>
                        <div className="item">
                            <div className="testimonial-one__single">
                                <div className="testimonial-one__quote">
                                    <img src="assets/images/icon/quote-icon-1.png" alt=""/>
                                </div>
                                <div className="testimonial-one__text-box">
                                    <p className="testimonial-one__text">Voldem Sigorta Tokat ile süreç çok hızlı ve
                                        şeffaftı. Doğru poliçeyi kısa sürede bulduk.</p>
                                </div>
                                <div className="testimonial-one__client-info">
                                    <div className="testimonial-one__client-img">
                                        <img src="assets/images/testimonial/testimonial-1-6.jpg" alt=""/>
                                    </div>
                                    <h3 className="testimonial-one__client-name"><Link href="musteri-yorumlari">Harbert
                                            Spenser</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Müşteri</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Testimonial One Single Start */}
                    
                    </Swiper>
                </div>
            </div>
        </section>
        {/* Testimonial One End  */}

        {/* Team Two Start  */}
        <section className="team-four">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <p className="section-title__tagline">EKİBİMİZ</p>
                    </div>
                    <h2 className="section-title__title">Voldem Sigorta Tokat'ın
                        <br/> Yetkin Ekibi</h2>
                </div>
                <div className="row">
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="ekip-detay">William Hender</Link></h3>
                                <p className="team-two__sub-title">Şirket CEO'su</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="ekip-detay"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="ekip-detay"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-vimeo"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-instagram-1"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-facebook"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="300ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="ekip-detay">Janes Cooper</Link></h3>
                                <p className="team-two__sub-title">Tasarımcı</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="ekip-detay"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="ekip-detay"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-vimeo"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-instagram-1"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-facebook"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                    {/* Team Two Single Start */}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="600ms">
                        <div className="team-two__single">
                            <div className="team-two__img-box">
                                <div className="team-two__img">
                                    <img src="assets/images/team/team-2-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-two__content">
                                <h3 className="team-two__title"><Link href="ekip-detay">Jonas Blueyar</Link></h3>
                                <p className="team-two__sub-title">Sigorta Yöneticisi</p>
                                <div className="team-two__share-and-social">
                                    <div className="team-two__share">
                                        <Link href="ekip-detay"><span className="icon-share"></span></Link>
                                    </div>
                                    <div className="team-two__social">
                                        <Link href="ekip-detay"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-vimeo"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-instagram-1"></span></Link>
                                        <Link href="ekip-detay"><span className="icon-facebook"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Team Two Single End */}
                </div>
            </div>
        </section>
        {/* Team Two End  */}

        {/* Brand One Start */}
        <section className="brand-one brand-three">
            <div className="container">
                <BrandSlider/>
            </div>
        </section>
        {/* Brand One End */}


                
            </Layout>
        </>
    )
}


