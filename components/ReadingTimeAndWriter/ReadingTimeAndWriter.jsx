import styles from "./ReadingTimeAndWriter.module.scss"
import timeIcon from "../../public/time.svg";
import Image from "next/future/image";
export default function ReadingTimeAndWriter(props) {
    return (<div className={styles.timeParent}>
      <div>
        <div style={{
          "display": "flex",
          alignItems: "center"
        }}>
          <Image src={timeIcon} />
          <div className={styles.timeText}>{props.readingTime}</div>
        </div>
      </div>
      <div>
        <div style={{
          "display": "flex",
          alignItems: "center"
        }}>
          <Image width={28} height={28} className={styles.writerPic} src={props.writer.profilePic} />
          <div>{props.writer.userName}</div>
        </div>
      </div>
    </div>);
  }
  