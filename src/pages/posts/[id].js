import { getAllPosysIds, getPosstData } from "@/lib/post";
import Layout from "component/Layout";
import Head from "next/head";
import utilStyles from '../../styles/utils.module.css'
export async function getStaticPaths(){
  const paths = getAllPosysIds();
  return{
    paths,
    fallback:false,
  }
}
export async function getStaticProps({params}){
const postData = await getPosstData(params.id);
return{
  props:{
    postData
  },
}
}
export default function Post({postData}) {
  return (
    <Layout>
      <Head>
       <title>
        {postData.title}
        </title> 
        
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>
         {postData.title}
        </h1>
        <div className={utilStyles.lightText}>
        {postData.data}
        </div>
        <div dangerouslySetInnerHTML={{__html:postData.blogContentHTML}}/>
      </article>
    </Layout>
  );
}