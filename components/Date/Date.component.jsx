import styles from "./Date.module.scss"
export default function Date(props) {
    return (<div className={styles.date}>{props.date}</div>);
  }
  