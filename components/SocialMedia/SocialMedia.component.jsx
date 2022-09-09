import styles from "./SocialMedia.module.scss"
import {AiFillGithub,AiFillMail} from "react-icons/ai";
import Link from "next/link";
export default function SocialMedia({}) {
  return (
    <div>
        <div>
        <a style={{"padding":"0 8px"}} href="https://github.com/dubeyKartikay">
            <AiFillGithub size="3rem"/>
        </a>
        <Link   href="/contact">
            <a style={{"cursor":"pointer","padding":"0 8px"}}>
                <AiFillMail  size="3rem"/>
            </a>
        </Link>
        </div>
    </div>
  )
}
