import styles from "./NormalBlog.module.scss"
import timeIcon from "../../public/time.svg";
import Image from "next/future/image";
export default function NormalBlog({ image, date, heading, readingTime, subText,writer,color }) {
  color = color ? color : "#d9d9d9"
  return (
    <div className={styles.parent}>
          <div className={styles.date}>{date}</div>
          <div className={styles.image}>
            <Image  width={500} height={500} style={{"border":`1px solid ${color}`}} className={styles.img} src={image} alt="" />
          </div>
          <div className={styles.heading}>{heading}</div>
          <div className={styles.timeParent}>
            <div> 
            <div style={{"display":"flex",alignItems:"center"}}>
              <Image src={timeIcon} />
             <div className={styles.timeText}  >{readingTime}</div>
            </div>
            </div>
            <div>
            <div style={{"display":"flex",alignItems:"center"}}>
              <Image width={28} height={28} className={styles.writerPic} src={writer.profilePic} />
               <div>{writer.userName}</div>
              </div>
            </div>
           </div>
          <div className={styles.subtext}>{subText}</div>
        </div>
  )
}
