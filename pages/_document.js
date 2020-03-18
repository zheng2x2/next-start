import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';
import { render } from 'react-dom';

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const {html, head} = renderPage();
        const styles = flush();

        return {html, head, styles}
    }

    render() {
        return (
            <html>
                {/* 이 값을 기본적으로 설정하고 Head 컴포넌트가 
                사용된 페이지의 경우엔 이 기본값 위에 덮어씌웁니다. */}
                <Head>
                    <style>{`body {margin:0} /* custom! */`}</style>
                    <title>Next.js 연습</title>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }

}