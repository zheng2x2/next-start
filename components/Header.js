import Link from 'next/link';

const linkStyle = {
    marginRight : '1rem'
}

const Header = () => {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>Home</a></Link>
            <Link href="/about"><a style={linkStyle}>About</a></Link>
            <Link prefetch href="/ssr-test"><a style={linkStyle}>SSR 테스트</a></Link>
            {/* 링크 컴포넌트를 렌더링할때 <Link prefetch href="..."> 형식으로 
            prefetch 값을 전달해주면 데이터를 먼저 불러온다음에 라우팅을 시작합니다. */}
        </div>
    )
}

export default Header;