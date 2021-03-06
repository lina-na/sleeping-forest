import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { useScripts } from '../hooks/useScripts'
import Wow from '../scripts/wow'
import { useEffect } from 'react'
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

    function transformScroll(e) {
      if (!e.deltaY) {
        return;
      }

      e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
      e.preventDefault();
    }

    const element = document.scrollingElement || document.documentElement;
    element.addEventListener('wheel', transformScroll);

    return () => element.removeEventListener('wheel', transformScroll);
  }, [typeof window !== 'undefined' && window]);

  return (
    <div className={styles.page}>
      <Head>
        <title>Sleeping Forest</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Empires.otf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/CaviarDreams.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/CaviarDreams_Bold.ttf" as="font" crossOrigin="" />
      </Head>

      <div className={styles.container}>
        <canvas width={width} height={height} id="wow"></canvas>
        <img src="/logo.png" alt="logo" width="320" height="200" style={{ zIndex: 2, pointerEvents: 'none' }} />
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
