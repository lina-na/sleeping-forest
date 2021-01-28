import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { useScripts } from '../hooks/useScripts'
import Wow from '../scripts/wow'
import { useEffect } from 'react'
import HorizontalScroll from '../components/horizontal-scroll'
import About from '../components/about'


export default function Home() {
  useScripts([Wow])
  let width, height;
  useEffect(() => {
    width = typeof window !== 'undefined' && window.innerWidth
    height = typeof window !== 'undefined' && window.innerHeight
  }, [typeof window !== 'undefined' && window]);

  return (
    <div className={styles.page}>
      <Head>
        <title>Sleeping Forest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HorizontalScroll>
        <div className={styles.container}>
          <canvas width={width} height={height} id="wow"></canvas>
          <h1 className={styles.title}>Welcome to Sleeping Forest!</h1>
          <p className={styles.description}>Линча сейчас работает над сайтом.</p>
        </div>

        <div className={styles.container} style={{ backgroundColor: '#B7C39B' }}>Home</div>

        <div className={styles.container} style={{ backgroundColor: '#37749A' }}><About /></div>

        <div className={styles.container} style={{ backgroundColor: '#815EB6' }}>Covers</div>

      </HorizontalScroll>

      <div className={styles.footer}>Дождалась от Вовы мокапы. ❤️</div>
    </div>
  )
}
