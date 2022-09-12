import Head from 'next/head'
// import Image from 'next/image'
import styles from "../styles/Home.module.scss"
import Loader from '../components/Loader/Loader.component'
import FeaturedBlog from '../components/FeaturedBlog/FeaturedBlog.component'
import NormalBlog from '../components/NormalBlog/NormalBlog.component'
import Tranquility from "../public/Tranquility.png"
import Subscribe from '../components/Subscribe/Subscribe.component'
import Image from 'next/future/image'
import { useState, useEffect } from 'react'
import scssVars from "../styles/variables.module.scss"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../components/Section/Section.component'
import trendingIcon from "../public/trending.svg"
import myPicksIcon from "../public/myPicks.svg"
import backgroundBlogPostImgOrange from "../public/backgroundBlogPostImgOrange.svg"
import Footer from '../components/Footer/Footer.component'
import SocialMedia from "../components/SocialMedia/SocialMedia.component"
export default function Home() {
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
      <div style={{"display":"flex","justifyContent":"center","width":"100%"}}>
        <Subscribe />
      </div>
      <Section heading="Trending" icon={trendingIcon}>
        <FeaturedBlog
          heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
          subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
          readingTime="3 min"
          date="December 21, 2022"
          image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
        />

        {mobile && <Swiper
          className={styles.nornalBlog}
          // install Swiper modules
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide> <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          /></SwiperSlide>
          <SwiperSlide>   <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          /></SwiperSlide>
          <SwiperSlide> <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          /></SwiperSlide>
        </Swiper>}

        {!mobile && <div style={{ "display": "flex", justifyContent: "space-between" }}>

          <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
            color="#e8630a"
          />
          <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          />
          <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          />

        </div>}
      </Section>
      <Section heading="My picks" icon={myPicksIcon} color="#e8630a">
        <FeaturedBlog
          heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
          subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
          readingTime="3 min"
          color="#e8630a"
          date="December 21, 2022"
          bgImg={backgroundBlogPostImgOrange}
          image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
        />
        {mobile && <Swiper
          className={styles.nornalBlog}
          // install Swiper modules
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide> <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          /></SwiperSlide>
          <SwiperSlide>   <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          /></SwiperSlide>
          <SwiperSlide> <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          /></SwiperSlide>
        </Swiper>}
        {!mobile && <div style={{ "display": "flex", justifyContent: "space-between" }}>

          <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          />
          <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          />
          <NormalBlog
            heading="Dear UI Designer, yok bisa yok belajar bikin copy sendiri"
            subText="Lupakan sejenak Lorem Ipsum saat mengisi teks pada design UI mu. Coba buat copy mu sendiri. Buat rekan kerja UX Writer lebih happy saat bekerja."
            readingTime="3 min"
            date="December 21, 2022"
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            writer={{ userName: "Kartikay Dubey", profilePic: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
          />

        </div>}
      </Section>
    </div>
  )
}
