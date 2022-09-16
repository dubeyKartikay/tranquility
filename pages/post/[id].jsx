import styles from "../../styles/Post.module.scss"
import Date from "../../components/Date/Date.component"
// import Image from "next/future/image"
import ReadingTimeAndWriter from "../../components/ReadingTimeAndWriter/ReadingTimeAndWriter"
import TableOfContentsCompoent from "../../components/TableOfComponents/TableOfContents.compoent"
import Markdown from "../../components/Markdown/Markdown.component"

export default function Post({ image, date, heading, readingTime, subText, writer, content }) {

  return (
    <div>
      <div className={styles.headingContainerContainer}>
        <div className={styles.headingContainer}>
          <Date date={date} />
          <div className={styles.heading}>{heading}</div>
          <ReadingTimeAndWriter
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
            readingTime={readingTime}
          />
          <div className={styles.subtext}>{subText}</div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentDiv}>
          <Markdown content={content}></Markdown>
        </div>
        <div className={styles.tableOfcontents}>
          <TableOfContentsCompoent />
        </div>
      </div>
    </div>
  )
}

import { connectToDatabase } from "../../lib/db";
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}
export async function getStaticProps(context){
  const {id} = context;
  // console.log(id);
  const conn = await connectToDatabase();
  let collection  = conn.db("Blogs").collection("Trending")
  const dataBlog = await collection.findOne({id:id});
  const { image, date, heading, readingTime, subText, writer,content:contentLink} = dataBlog;
  // console.log(dataBlog);
  let res = await fetch(contentLink);
  let content = await res.text();
  return{
    props:{ image, date, heading, readingTime, subText, writer,content}
  }

}