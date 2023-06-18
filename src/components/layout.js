import '../styles/reset.css'
import '../styles/style.css'
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({children, title = 'Screen Lit Hub'}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}
