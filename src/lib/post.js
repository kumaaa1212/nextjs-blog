import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html'
const postsDirectore = path.join(process.cwd(),'post')
// 現在のpathにpostのpathを追加する
export function getPostData() {
  const filename = fs.readdirSync(postsDirectore);
  // ファイル名を配列のオブジェクトとする。
  const allPostData = filename.map((filename) =>{
    const id = filename.replace(/\.md/,'');
    // そのpathの拡張子をとる
    const fullPath = path.join(postsDirectore,filename);
// ここのfilenameはmapの所だから、一つずつにアクセスすることができるようになる。一つずつのファイルにアクセスする。
    const fileCOntents = fs.readFileSync(fullPath,'utf8');
    // 中身を取得する
    const matterResult = matter(fileCOntents);
    // 一つずつのメタデータを取得する。
    return{id,...matterResult.data,
      // 囲んでいる所のdataを取得する
    }
  })
  return allPostData;
}

// pathはオブジェクトで返す必要がある。
export function getAllPosysIds(){
  const filename = fs.readdirSync(postsDirectore);
  return filename.map((filename) =>{
    return {
      params:{
        id: filename.replace(/\.md/,'')
      }
    }
  })
}
// idに基づいてブログデータを返す
export async function getPosstData(id){
  const fullPath = path.join(postsDirectore,`${id}.md`);
  const fileContent = fs.readFileSync(fullPath,'utf8');
  const matterResult = matter(fileContent);
  const blogcontent = await remark().use(html).process(matterResult.content);
  const blogContentHTML = blogcontent.toString();
  return{
    id,blogContentHTML,...matterResult.data
  }
}