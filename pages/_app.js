import '../styles/globals.scss'
import { SessionProvider } from "next-auth/react"
import Navbar from '../components/Navbar/Navbar.component'
function MyApp({ Component,  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
