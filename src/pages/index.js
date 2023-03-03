import Layout, { siteTitle } from 'component/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/Home.module.css'
import {getPostData} from '../lib/post'
import Head from 'next/head'
export async function getStaticProps(){
  const allPostDate = getPostData();
  return{
    props:{
      allPostDate,
    }
  }
}

export default function Home({allPostDate}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>プロフィールです。これから色々な情報を発信していこうと思うます。</p>
      </section>
      <section>
      <h2>エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostDate.map(({id,title,date,thumbnail}) =>(
      <article key={id}>
      <Link href={`/posts/${id}`}>
      <img src={`${thumbnail}`} className={styles.thumbnailImage}/>
      </Link>
      <Link href={`/posts/${id}`}>
        <span className={utilStyles.boldText}>{title}</span>
      </Link>
      <br />
      <small className={utilStyles.lightText}>{date}</small>
    </article>
        ))}
  
      </div>
      </section>
    </Layout>
  )
}