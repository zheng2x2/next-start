import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    <title>My new cool app</title>
                </Head>
                <Component {...pageProps} />
            </>
        )
    }
}