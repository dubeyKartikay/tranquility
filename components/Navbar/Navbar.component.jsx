import styles from "./Navbar.module.scss";
import { useSession } from "next-auth/react";
import Link from 'next/link'
import Image from 'next/image'
import { signOut } from "next-auth/react";
import proficeUserDefaut from "../../public/profileUserDefault.png"
import { useRef } from "react";
import { useOutsideAlerter } from "../../lib/customHooks";
import TranquilityButton from "../TranquilityButton/TranquilityButton.component";
export default function Navbar() {
    // const user = null;
    const userOptionsRef = useRef();
    const profileRef = useRef();
    const actionButtonRef = useRef();
    const slideInmenuRef = useRef();
    const slideInmenuContainerRef = useRef();
    const handleProfileClick = () => {
        userOptionsRef.current.classList.toggle(styles.toggleOpacity);
    };
    // const username =null;
    const makeUserdropDownVanish = () => {
        userOptionsRef.current.classList.add(styles.toggleOpacity);
    }
    const makeActiondropDownVanish = ()=>{
        slideInmenuRef.current.classList.remove(styles.actionDDToggle)
        actionButtonRef.current.classList.remove(styles.menuOpened)
        
    }
    useOutsideAlerter(profileRef, makeUserdropDownVanish)
    useOutsideAlerter(slideInmenuContainerRef, makeActiondropDownVanish)
    const { data: session, loading } = useSession();
    // console.log(session);
    const handleActionMenuClick = ()=>{
        actionButtonRef.current.classList.toggle(styles.menuOpened)
        slideInmenuRef.current.classList.toggle(styles.actionDDToggle)
        
    }

    return (
        <nav className={styles.nav}>
            <div ref={slideInmenuContainerRef} className={styles.div1} style={{"width":"100%"}}>
                <div ref ={actionButtonRef} onClick={handleActionMenuClick} className={styles.actionButton}>
                    <div className={styles.divAc1}></div>
                    <div className={styles.divAc2}></div>
                    <div className={styles.divAc3}></div>
                </div>
                <ul ref={slideInmenuRef} className={styles.parentContainer}>
                    <li className={styles.navPages}>
                        <Link href="/">
                            <a onClick={makeActiondropDownVanish} href="">home</a>
                        </Link>
                    </li>
                    <li className={styles.navPages}>
                        <div onClick={makeActiondropDownVanish}>About</div>
                        <div onClick={makeActiondropDownVanish}>Contact</div>
                        <div onClick={makeActiondropDownVanish}>Search</div>
                    </li>
                    <li></li>
                </ul>
            </div>
            <div ref={profileRef} className={styles.profilePicContainer}>
                    <div style={{ "cursor": "pointer" }} onClick={handleProfileClick} className={styles.profilePic}  >
                        <Image src={proficeUserDefaut} alt={session ? session.user.name : "Login First"} srcSet="" />
                    </div>
                    <ul ref={userOptionsRef} className={`${styles.userOptions} ${styles.toggleOpacity}`}>
                        {session && <>
                            <li onClick={makeUserdropDownVanish}>Create New Post</li>
                            <li onClick={makeUserdropDownVanish}>Preferences</li>
                            <li onClick={makeUserdropDownVanish}>View profile</li>
                            <TranquilityButton className={styles.button} onClick={() => { signOut(); makeUserdropDownVanish() }} >Sign out</TranquilityButton></>}
                        {!session &&
                            <div onClick={makeUserdropDownVanish}   >
                                <Link href="/enter" >Login</Link>
                            </div>}
                    </ul>
            </div>
        </nav>
    )
}
