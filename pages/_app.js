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
function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer>
      <SocialMedia/>
      </Footer>
    </SessionProvider>
  )
}

export default MyApp
