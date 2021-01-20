import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useScripts } from '../hooks/useScripts'
import Wow from '../scripts/wow'
import { useEffect } from 'react'
import HorizontalScroll from '../components/horizontal-scroll'


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

          <p className={styles.footer}>Жду от Вовы мокапы. ❤️</p>
        </div>

        <div className={styles.container}>Kek</div>

      </HorizontalScroll>
    </div>
  )
}
