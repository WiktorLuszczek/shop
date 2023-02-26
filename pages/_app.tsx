import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { authorizedClient, client } from '../apollo/apollo-client';
import { Layout } from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import OrderContextProvider from '../context/OrderContextProvider';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
    return (
        <>
            <Head>
                <title>TIENDA DE ROPA</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ApolloProvider client={client}>
                <SessionProvider>
                    <ApolloProvider client={authorizedClient}>
                        <OrderContextProvider>
                            <Header />
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                            <Footer />
                        </OrderContextProvider>
                    </ApolloProvider>
                </SessionProvider>
            </ApolloProvider>
        </>
    );
}
