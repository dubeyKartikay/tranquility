import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import styles from './PageToPageLoader.module.scss';
export default function PageToPageLoader() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    console.log(loading);

    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    return loading && (
    <div className={styles.spinnerWrapper}>
        <div className={styles.spinner}></div>
        <div className={styles.loadingBar}></div>
        </div>)
}