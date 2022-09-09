import SKIMG from "../../public/Rectangle.png";
import profileUserDefault from "../../public/profileUserDefault.png";
import backgroundBlogPostImg from "../../public/backgroundBlogPostImg.png";
import timeIcon from "../../public/time.svg";
import Image from "next/future/image";
import styles from "./FeaturedBlog.module.scss";
import scssVars from "../../styles/variables.module.scss"
import { useState, useEffect } from "react";
export default function FeaturedBlog({ image, date, heading, readingTime, subText,writer,color,bgImg}) {
  const [mobile, setMobile] = useState(undefined)
  color = color ? color :  "#d9d9d9"
  bgImg = bgImg ? bgImg :backgroundBlogPostImg
  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < Number(scssVars.screenSmall.slice(0, -2)) ? true : false)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])
  return (
    <>
      {mobile &&
        <div className={styles.parent}>
          <div className={styles.date}>{date}</div>
          <div className={styles.image}>
            <Image className={styles.imgBg} src={bgImg} alt="" />
            <Image style={{"border":`1px solid ${color}`}} width={1080} height={720} className={styles.img} src={image} alt="" />
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
        </div>}
      {!mobile && <div className={styles.parent}>
        <div className={styles.image}>
          <Image className={styles.imgBg} src={bgImg} alt="" />
          <Image  style={{"border":`1px solid ${color}`}} width={1080} height={720} className={styles.img} src={image} alt="" />
        </div>
        <div className={styles.cotentParent}>
          <div className={styles.date}>{date}</div>
          <div className={styles.heading}> {heading}</div>
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
          <div className={styles.subtext}> {subText}</div>
        </div>
      </div>
      }
    </>
  )
}

