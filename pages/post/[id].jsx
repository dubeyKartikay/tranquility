import styles from "../../styles/Post.module.scss"
import Date from "../../components/Date/Date.component"
// import Image from "next/future/image"
import ReadingTimeAndWriter from "../../components/ReadingTimeAndWriter/ReadingTimeAndWriter"
import TestMd from "../../public/test.md"
import TableOfContentsCompoent from "../../components/TableOfComponents/TableOfContents.compoent"
import Markdown from "../../components/Markdown/Markdown.component"

export default function Post({ image, date, heading, readingTime, subText, writer, color, content }) {
  heading = "Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
  readingTime = "3 min"
  writer = "Kartikay Dubey"
  subText = "Pernahkah kamu saat membuat design sebuah halaman lantas bingung halaman ini sebaiknya diisi apa ya? konten atau elemen apa yang cocok untuk halaman ini?"
  date = "December 21, 2022"
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  content = TestMd

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
