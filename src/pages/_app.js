import Layout from '../components/layout'
import {AuthProvider} from "@/components/context/authContext";

export default function MyApp({Component, pageProps}) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    )
}