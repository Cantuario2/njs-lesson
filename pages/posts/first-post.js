import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Agora mexe... pegue no compasso!</h1>
            <Link href='/'>
                <a>Voltar</a>
            </Link>
        </Layout>
    );
}