import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

       
            <ul className="main-menu__list">
                <li className="current">
                    <Link href="/">Ana Sayfa</Link>
                </li>
                <li>
                    <Link href="about">Hakkımızda</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Sigorta</Link>
                    <ul>
                        <li><Link href="insurance">Sigorta</Link></li>
                        <li><Link href="life-insurance">Hayat Sigortası</Link></li>
                        <li><Link href="health-insurance">Sağlık Sigortası</Link></li>
                        <li><Link href="car-insurance">Araç Sigortası</Link></li>
                        <li><Link href="home-insurance">Konut Sigortası</Link></li>
                        <li><Link href="family-insurance">Aile Sigortası</Link></li>
                        <li><Link href="business-insurance">İşletme Sigortası</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-sidebar">Blog Kenar Çubuklu</Link></li>
                        <li><Link href="blog-details">Blog Detayı</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="contact">İletişim</Link>
                </li>
            </ul>
        </>
    )
}
