import Head from "next/head";
import styles from './layout.module.css'
import utilStyles from '../src/styles/utils.module.css'
import Link from "next/link";
export const siteTitle = 'Next.js blog';
function Layout({children,home}) {
  const name = 'kuma';
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"/>  
      </Head>
      <header className={styles.header}>
        {home ? (<>
        <img src="/images/profile.png" 
        className={`${utilStyles.borderCircle} ${styles.headerImage}`}/>
        <h1>{name}</h1>
        </>) : (<>
          <img src="/images/profile.png" 
        className={`${utilStyles.borderCircle}`}/>
        <h1>{name}</h1>
        </>)}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href='/'>
          ←ホームへ戻る
          </Link>
        </div>
      )}
    </div>
  );
}
export default Layout;
