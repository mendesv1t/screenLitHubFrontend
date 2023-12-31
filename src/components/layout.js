import '../styles/reset.css'
import '../styles/style.css'
import Head from 'next/head'
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({children, title = 'Screen Lit Hub'}) {
    return (
        <div className="wrapper">
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar/>
            <main className="content">{children}</main>
            <Footer/>
        </div>
    )
}
