import Head from "next/head";
import Link from "next/link";
export default function FirstPost() {
  return (
    <div>
      <Head>
      <title>最初の投稿</title>
      </Head>
      <Link href={'/'}>ホームヘ戻る</Link>
    </div>
  );
}