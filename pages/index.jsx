import styles from "../styles/Home.module.scss"
import FeaturedBlog from '../components/FeaturedBlog/FeaturedBlog.component'
import NormalBlog from '../components/NormalBlog/NormalBlog.component'
import Tranquility from "../public/Tranquility.png"
import Subscribe from '../components/Subscribe/Subscribe.component'
import Image from 'next/future/image'
import { useState, useEffect } from 'react'
import scssVars from "../styles/variables.module.scss"
import { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../components/Section/Section.component'
import myPicksIcon from "../public/myPicks.svg"
import { connectToDatabase } from "../lib/db"
import Link from "next/link"
export default function Home(props) {
  const [mobile, setMobile] = useState(undefined)
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
    <div >
      <Image className={styles.tranquilityImg} src={Tranquility} />
      <div style={{ "display": "flex", "justifyContent": "center", "width": "100%" }}>
        <Subscribe />
      </div>
      <Section heading="My picks" icon={myPicksIcon} color="#e8630a">
        <Link href={`/post/${props.blogData[0]["_id"]}`}>
          <a>
            <FeaturedBlog {...props.blogData[0]} />
          </a>
        </Link>

        {mobile && <Swiper
          className={styles.nornalBlog}
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
           { props.blogData.length >=2 && <SwiperSlide><NormalBlog {...props.blogData[1]} /> </SwiperSlide>}
           { props.blogData.length >=3 && <SwiperSlide><NormalBlog {...props.blogData[2]} /> </SwiperSlide>}
           { props.blogData.length >=4 && <SwiperSlide><NormalBlog {...props.blogData[3]} /> </SwiperSlide>}
        </Swiper>}
        {!mobile && <div style={{ "display": "flex", justifyContent: "space-between" }}>

          { props.blogData.length >=2 && <NormalBlog {...props.blogData[1]} />}
          { props.blogData.length >=3 && <NormalBlog {...props.blogData[2]} />}
          { props.blogData.length >=4 && <NormalBlog {...props.blogData[3]} />}

        </div>}
      </Section>
    </div>
  )
}

export async function getStaticProps() {
  const conn = await connectToDatabase();
  const trendinCollection = conn.db("Blogs").collection("Trending");
  let arr = await trendinCollection.find().sort({ "_id": 1 }).toArray()
  return {
    props: { "blogData": arr }
  }
}