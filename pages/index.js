import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getSortedDatabaseData } from '../lib/database';

export async function getStaticProps()
{
  const allPostsData = getSortedPostsData();
  const allGetVersion = await getSortedDatabaseData();
  return {
    props: {
      allPostsData,
      allGetVersion
    }
  }
}

export default function Home({ allPostsData, allGetVersion }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Data Importada:</h2>
        
        <table className={utilStyles.table}>
          <tr>
            <td>Data</td>
            <td>Arquivo</td>
            <td>Descrição</td>
          </tr>
          
          {allPostsData.map(({ id, date, title }) => (
            <tr className={utilStyles.tableItem} key={id}>
              <td>
                {date}
              </td>
              <td>
                {id}
              </td>
              <td>
                {title}
              </td>
            </tr>
          ))}
        </table>

        <ul className={utilStyles.list}>
          {allGetVersion.map(({ id, Ver }) => (
            <li className={utilStyles.listItem} key={id}>
              id:{' '}{id}
              <br />
              Version:{' '}{Ver}
            </li>
          ))}
        </ul>
        <p>Agora pare... pegue no bumbum!</p>
        Acesse{' '}
        <Link href="/posts/first-post">
          <a>essa página!</a>
        </Link>
      </section>
    </Layout>
  )
}