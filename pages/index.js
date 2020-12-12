import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useScripts } from '../hooks/useScripts'
import Wow from '../scripts/wow'

export default function Home() {
  useScripts([Wow])
  return (
    <div className={styles.container}>
      <Head>
        <title>Sleeping Forest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <canvas id="wow"></canvas>
      <h1 className={styles.title}>Welcome to Sleeping Forest!</h1>
      <p className={styles.description}>Линча сейчас работает над сайтом.</p>

      <p className={styles.footer}>Жду от Вовы мокапы. ❤️</p>
    </div>
  )
}
