import styles from "./Subscribe.module.scss"
import TranquilityButton from "../TranquilityButton/TranquilityButton.component"
import { useState } from "react";
import Loader from "../Loader/Loader.component";
export default function Subscribe() {
    const [isLoading,setIsLoading] = useState(false);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const {  email:emailEle} = event.target;
        const {value:email} = emailEle; 
        setIsLoading(true)
       const res = await fetch("/api/subscribe/newuser",{
            method :"POST",
            body : JSON.stringify({email}),
            headers : {"content-type":"application/json"}
  
        })
        setIsLoading(false)
        console.log(res);
    }
  return (
    <div style={{"width":"100%","maxWidth":"1200px"}}>
        <Loader show={isLoading}/>
        <form className={styles.parent} onSubmit={handleSubmit}>
            <input name="email" id="email" type="email" />
            <TranquilityButton className={styles.button} disabled={isLoading} type="submit">Subscribe</TranquilityButton>
        </form>
    </div>
  )
}
