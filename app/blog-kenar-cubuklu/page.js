
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Kenar Çubuklu">
        {/* Blog Sidebar Start */}
        <section className="blog-sidebar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-sidebar__left">
                            {/* Blog Sidebar Single Start */}
                            <div className="blog-sidebar__single">
                                <div className="blog-sidebar__img-box">
                                    <div className="blog-sidebar__img">
                                        <img src="assets/images/blog/blog-sidebar-1-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="blog-sidebar__content">
                                    <div className="blog-sidebar__meta">
                                        <p><span className="icon-calendar"></span>21 Nisan 2023</p>
                                        <p><span className="icon-user"></span>Saiful Islam</p>
                                    </div>
                                    <h3 className="blog-sidebar__title"><Link href="blog-detay">Sigortada
                                            Çözüm Odaklı Yaklaşım</Link></h3>
                                    <div className="blog-sidebar__btn-box">
                                        <Link href="blog-detay" className="blog-sidebar__btn thm-btn">devamını oku</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Sidebar Single End */}
                            {/* Blog Sidebar Single Start */}
                            <div className="blog-sidebar__single">
                                <div className="blog-sidebar__img-box">
                                    <div className="blog-sidebar__img">
                                        <img src="assets/images/blog/blog-sidebar-1-2.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="blog-sidebar__content">
                                    <div className="blog-sidebar__meta">
                                        <p><span className="icon-calendar"></span>21 Nisan 2023</p>
                                        <p><span className="icon-user"></span>Saiful Islam</p>
                                    </div>
                                    <h3 className="blog-sidebar__title"><Link href="blog-detay">Sigortada
                                            Doğru Strateji Seçimi</Link></h3>
                                    <div className="blog-sidebar__btn-box">
                                        <Link href="blog-detay" className="blog-sidebar__btn thm-btn">devamını oku</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Sidebar Single End */}
                            {/* Blog Sidebar Single Start */}
                            <div className="blog-sidebar__single">
                                <div className="blog-sidebar__img-box">
                                    <div className="blog-sidebar__img">
                                        <img src="assets/images/blog/blog-sidebar-1-3.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="blog-sidebar__content">
                                    <div className="blog-sidebar__meta">
                                        <p><span className="icon-calendar"></span>21 Nisan 2023</p>
                                        <p><span className="icon-user"></span>Saiful Islam</p>
                                    </div>
                                    <h3 className="blog-sidebar__title"><Link href="blog-detay">Konut Sigortasında
                                            Öne Çıkan Başlıklar</Link></h3>
                                    <div className="blog-sidebar__btn-box">
                                        <Link href="blog-detay" className="blog-sidebar__btn thm-btn">devamını oku</Link>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Sidebar Single End */}
                            <div className="blog-sidebar__pagination">
                                <ul className="pg-pagination list-unstyled">
                                    <li className="count"><Link href="#">1</Link></li>
                                    <li className="count"><Link href="#">2</Link></li>
                                    <li className="count"><Link href="#">3</Link></li>
                                    <li className="next">
                                        <Link href="#" aria-label="Next"><i className="icon-next"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <h3 className="sidebar__title">Arama</h3>
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Anahtar kelime..."/>
                                    <button type="submit"><i className="icon-search"></i></button>
                                </form>
                            </div>
                            <div className="sidebar__single sidebar__post">
                                <h3 className="sidebar__title">Son Yazılar</h3>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-1.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-detay">İşletmenizi Güvende
                                                    Tutmanın Yolları</Link>
                                                <span className="sidebar__post-content-meta"><i className="icon-clock"></i>21
                                                    Nisan 2023</span>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-2.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-detay">Sigortada Stratejik
                                                    Yaklaşımlar</Link>
                                                <span className="sidebar__post-content-meta"><i className="icon-clock"></i>21
                                                    Nisan 2023</span>
                                            </h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/lp-1-3.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <h3>
                                                <Link href="blog-detay">Haftanın Öne
                                                    Çıkan Başlıkları</Link>
                                                <span className="sidebar__post-content-meta"><i className="icon-clock"></i>21
                                                    Nisan 2023</span>
                                            </h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__category">
                                <h3 className="sidebar__title">Kategoriler</h3>
                                <ul className="insurance-details__catagories-list list-unstyled">
                                    <li>
                                        <Link href="blog-detay">Sağlık Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-detay">Konut Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-detay">Hayat Sigortası <span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-detay">Araç Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-detay">Yangın Sigortası<span className="icon-next"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-detay">İşletme Sigortası<span
                                                className="icon-next"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__tags">
                                <h3 className="sidebar__title">Etiketler</h3>
                                <div className="sidebar__tags-list">
                                    <Link href="#">Bilişim</Link>
                                    <Link href="#">Yazılım</Link>
                                    <Link href="#">Tasarım</Link>
                                    <Link href="#">Hizmet</Link>
                                    <Link href="#">Geliştirme</Link>
                                    <Link href="#">Dijital</Link>
                                    <Link href="#">Siber</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Blog Sidebar End */}

            </Layout>
        </>
    )
}