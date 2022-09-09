import styles from "./Footer.module.scss"
import Subscribe from "../Subscribe/Subscribe.component"


export default function Footer({children}) {
  return (
    <div className={styles.parent}>
        <div className={styles.subscribeContainer}>
            <div className={styles.heading} >Like what you see? </div>
            <Subscribe/>
        </div>
        <div style={{"display":"flex","justifyContent":"center","width":"100%","padding":"1rem 0"}}>
            {children}
        </div>
        

    </div>
  )
}
