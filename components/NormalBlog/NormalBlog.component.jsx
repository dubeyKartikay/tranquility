import styles from "./NormalBlog.module.scss"

import Image from "next/future/image";

import Date from "../Date/Date.component";
import ReadingTimeAndWriter from "../ReadingTimeAndWriter/ReadingTimeAndWriter";


export default function NormalBlog({ image, date, heading, readingTime, subText, writer, color }) {
  color = color ? color : "#d9d9d9"
  return (
    <div className={styles.parent}>
      <Date date={date}></Date>
      <div className={styles.image}>
        <Image width={500} height={500} style={{ "border": `1px solid ${color}` }} className={styles.img} src={image} alt="" />
      </div>
      <div className={styles.heading}>{heading}</div>
      <ReadingTimeAndWriter readingTime={readingTime} writer={writer}></ReadingTimeAndWriter>
      <div className={styles.subtext}>{subText}</div>
    </div>
  )
}
