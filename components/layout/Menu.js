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
                    <Link href="hakkimizda">Hakkımızda</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Ürünlerimiz</Link>
                    <ul>
                        <li><Link href="arac-sigortasi">Trafik Sigortası</Link></li>
                        <li><Link href="arac-sigortasi">Kasko</Link></li>
                        <li><Link href="saglik-sigortasi">Tamamlayıcı Sağlık Sigortası</Link></li>
                        <li><Link href="saglik-sigortasi">Özel Sağlık Sigortası</Link></li>
                        <li><Link href="saglik-sigortasi">Seyahat Sağlık Sigortası</Link></li>
                        <li><Link href="konut-sigortasi">DASK</Link></li>
                        <li><Link href="konut-sigortasi">Konut Sigortası</Link></li>
                        <li><Link href="isyeri-sigortasi">İşyeri Sigortası</Link></li>
                        <li><Link href="hayat-sigortasi">Ferdi Kaza Sigortası</Link></li>
                        <li><Link href="isyeri-sigortasi">Nakliyat Sigortası</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Aracınız</Link>
                    <ul>
                        <li><Link href="arac-sigortasi">Trafik Sigortası</Link></li>
                        <li><Link href="arac-sigortasi">Kasko</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Sağlığınız</Link>
                    <ul>
                        <li><Link href="saglik-sigortasi">Tamamlayıcı Sağlık Sigortası</Link></li>
                        <li><Link href="saglik-sigortasi">Özel Sağlık Sigortası</Link></li>
                        <li><Link href="saglik-sigortasi">Seyahat Sağlık Sigortası</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Konutunuz</Link>
                    <ul>
                        <li><Link href="konut-sigortasi">DASK</Link></li>
                        <li><Link href="konut-sigortasi">Konut Sigortası</Link></li>
                        <li><Link href="isyeri-sigortasi">İşyeri Sigortası</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Diğer</Link>
                    <ul>
                        <li><Link href="hayat-sigortasi">Ferdi Kaza Sigortası</Link></li>
                        <li><Link href="isyeri-sigortasi">Nakliyat Sigortası</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="iletisim">İletişim</Link>
                </li>
            </ul>
        </>
    )
}
