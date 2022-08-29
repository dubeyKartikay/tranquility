import styles from "./Navbar.module.scss";
import { useSession } from "next-auth/react";
import Link from 'next/link'
import { signOut } from "next-auth/react";
export default function Navbar() {
    // const user = null;
    // const username =null;
    const {data: session,loading} = useSession();
    // console.log(session);
  return (
    <nav>
        <ul>
            <li>
                <Link href="/">
                    <a href="">home</a>
                </Link>
            </li>
            <li>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Search</div>
            </li>
            <li>
                <img src="" alt={session ? session.user.name : "Login First" } srcSet="" />
                <ul>
                    <li>Create New Post</li>
                    <li>Preferences</li>
                    <li>View profile</li>
                    <button onClick={()=>signOut()} >Sign out</button>
                </ul>
            </li>
        </ul>

    </nav>
  )
}
