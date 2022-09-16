import '../styles/globals.scss'
import { SessionProvider } from "next-auth/react"

import Navbar from '../components/Navbar/Navbar.component'
import Footer from '../components/Footer/Footer.component';
import SocialMedia from '../components/SocialMedia/SocialMedia.component';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'katex/dist/katex.min.css';
import PageToPageLoader from '../components/PageToPageLoader/PageToPageLoader.component';
import NextProgress from 'next-progress';
import sassVars from "../styles/variables.module.scss"
function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <NextProgress color={sassVars.primaryColor}  options={{ showSpinner: false }}/>
      <PageToPageLoader/><Component {...pageProps} />
      <Footer>
      <SocialMedia/>
      </Footer>
    </SessionProvider>
  )
}

export default MyApp
