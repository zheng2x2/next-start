import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        {/* <Header/> */}
        <h1>
            안녕, Next.js
        </h1>
        <h2>
            <Link href="/about">
                {/* <a>소개</a> */}
                <div style={{background: 'black', color: 'white'}}>소개</div>
            </Link>
        </h2>
    </Layout>
);

export default Index;