import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { useScripts } from '../hooks/useScripts'
import Wow from '../scripts/wow'
import { useEffect, useState } from 'react'
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
  z-index: 20;
`
const Slider = s.div`
  position: absolute;
  right: 50px;
  cursor: pointer;
`;

export default function Layout() {
  useScripts([Wow])
  let width, height;

  const [value, setValue] = useState(0);

  const handleRangeChange = ({ target }) => {
    const container = document.getElementById('page');

    const element = document.scrollingElement || document.documentElement;
    const width = window.innerWidth;
    setValue(target.value);

    const position = (target.value * container.offsetWidth / 100) - width;
    element.scroll({
      top: 0,
      left: position > container.offsetWidth ? container.offsetWidth : position,
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {

      const transformScroll = (e) => {
        if (!e.deltaY) return;
        e.currentTarget.scrollLeft += e.deltaY + e.deltaX;
        e.preventDefault();
      }

      const element = document.scrollingElement || document.documentElement;
      element.addEventListener('wheel', transformScroll);

      width = window.innerWidth
      height = window.innerHeight

      const container = document.getElementById('page');

      let containerWidth;

      window.onscroll = function () {
        containerWidth = container.offsetWidth - width;
        const containerPos = container.getBoundingClientRect();
        const newValue = (-containerPos.left + width) * 100 / container.offsetWidth;
        setValue(newValue);
      };

      return () => element.removeEventListener('wheel', transformScroll);
    }
  }, [typeof window !== 'undefined' && window]);

  return (
    <div id="page" className={styles.page}>
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

      <div className={styles.container}>
        <Home />
        <FooterBackground />
      </div>

      <div className={styles.container}>
        <About />
        <FooterBackground />
      </div>

      <div className={styles.container}>
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

        <Slider>
            <input value={value} onChange={handleRangeChange} type="range" min="25" max="100" id="widget2" step="1" />
        </Slider>
      </div>
    </div>
  )
}
