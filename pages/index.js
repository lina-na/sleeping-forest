import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { useScripts } from '../hooks/useScripts'
import Wow from '../scripts/wow'
import { useEffect } from 'react'
import HorizontalScroll from '../components/horizontal-scroll'
import About from '../components/about'
import Covers from '../components/covers'
import Home from '../components/home'
import s from 'styled-components';

const FooterBackground = s.div`
  width: 100vw;
  height: 80px;
  background-color: black;
  position: absolute;
  bottom: 0;
`

export default function Layout() {
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
          <img src="/logo.png" alt="logo" width="320" height="200" style={{ zIndex: 2 }} />
        </div>

        <div className={styles.container} style={{ backgroundColor: '#B7C39B' }}>
          <Home />
          <FooterBackground />
        </div>

        <div className={styles.container} style={{ backgroundColor: '#37749A' }}>
          <About />
          <FooterBackground />
        </div>

        <div className={styles.container} style={{ backgroundColor: '#815EB6' }}>
          <Covers />
          <FooterBackground />
        </div>

      </HorizontalScroll>

      <div className={styles.footer}>
        <a href="https://www.youtube.com/channel/UCak_OiOc3G25F1tbOiAV5nA">
          <img alt="youtube" src="youtube.png" />
        </a>
        <a href="https://soundcloud.com/sleepingf0r3st">
          <img alt="sound-cloud" src="sound-cloud.png" />
        </a>
        <a href="https://vk.com/sleepingf0r3st">
          <img alt="vk" src="vk.png" />
        </a>
      </div>
    </div>
  )
}
