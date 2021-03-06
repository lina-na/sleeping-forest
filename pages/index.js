import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { useScripts } from '../hooks/useScripts'
import Wow from '../scripts/wow'
import { useEffect } from 'react'
import HorizontalScroll from '../components/horizontal-scroll'
import About from '../components/about'
import Covers from '../components/covers'
import Image from 'next/image'
import s from 'styled-components';

const FooterBackground = s.div`
  width: 100vw;
  height: 100px;
  background-color: black;
  position: absolute;
  bottom: 0;
`

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
          <Image src="/logo.png" alt="logo" width="320" height="200" />
        </div>

        <div className={styles.container} style={{ backgroundColor: '#B7C39B' }}>
          Home
          <FooterBackground  />
        </div>

        <div className={styles.container} style={{ backgroundColor: '#37749A' }}>
          <About />
          <FooterBackground  />
        </div>

        <div className={styles.container} style={{ backgroundColor: '#815EB6' }}>
          <Covers />
          <FooterBackground  />
        </div>

      </HorizontalScroll>

      <div className={styles.footer}>Дождалась от Вовы мокапы. ❤️</div>
    </div>
  )
}
