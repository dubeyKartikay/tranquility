import styles from "./Section.module.scss"
import Image from "next/future/image"
export default function Section({children,heading,icon,color}) {
  return (
    <div className={styles.parent}>
        <div className={styles.headingContainer}>
            <div className={styles.icon}><Image src={icon} alt="" /></div>
            <div style={{"color":color}} className={styles.heading}>{heading}</div>
            <div style={{"position":"absolute","background":color,"width":"100px","height":"5px","top":"40px","borderRadius":"25px"}} ></div>
        </div>
        {children}
    </div>
  )
}
