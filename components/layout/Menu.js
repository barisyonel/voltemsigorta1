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
                <li className="dropdown">
                    <Link href="#">Kurumsal</Link>
                    <ul>
                        <li><Link href="hakkimizda">Hakkımızda</Link></li>
                        <li><Link href="ekibimiz">Ekibimiz</Link></li>
                        <li><Link href="sikca-sorulan-sorular">SSS</Link></li>
                        <li><Link href="iletisim">İletişim</Link></li>
                        <li><Link href="blog">Blog</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Araç</Link>
                    <ul>
                        <li><Link href="arac-sigortasi">Trafik Sigortası</Link></li>
                        <li><Link href="kasko-sigortasi">Kasko Sigortası</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Konut</Link>
                    <ul>
                        <li><Link href="dask-sigortasi">DASK Sigortası</Link></li>
                        <li><Link href="konut-sigortasi">Konut Sigortası</Link></li>
                        <li><Link href="isyeri-sigortasi">İşyeri Sigortası</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Sigorta</Link>
                    <ul>
                        <li><Link href="sigorta">Sigortalar</Link></li>
                        <li><Link href="hayat-sigortasi">Hayat Sigortası</Link></li>
                        <li><Link href="saglik-sigortasi">Sağlık Sigortası</Link></li>
                        <li><Link href="arac-sigortasi">Araç Sigortası</Link></li>
                        <li><Link href="konut-sigortasi">Konut Sigortası</Link></li>
                        <li><Link href="dask-sigortasi">DASK Sigortası</Link></li>
                        <li><Link href="isyeri-sigortasi">İşletme Sigortası</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="iletisim">İletişim</Link>
                </li>
            </ul>
        </>
    )
}
