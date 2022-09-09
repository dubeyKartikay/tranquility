
import styles from "./TranquilityButton.module.scss"
export default function TranquilityButton({children,onClick,btnStyle,className,disabled,type}) {
  let isDisabledOpacity = disabled ? 0.5 : 1;
  let cursor = disabled ? "default":"pointer";
  return (
    <button type={type} style={{"opacity":isDisabledOpacity,"cursor":cursor}} onClick={onClick} className = { `${btnStyle == "outline" ? styles.TranquilityButtonOutline : styles.TranquilityButtonFilled} ${className}`} ><span>{children}</span></button>
  )
}
  