import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Sleeping Forest</title>
        <link rel="icon" href="/favicon.ico" />
        {typeof window !== 'undefined' && <script src='/wow.js'></script>}
      </Head>

      <canvas id="wow"></canvas>
        <h1 className={styles.title}>Welcome to Sleeping Forest!</h1>
        <p className={styles.description}>Линча сейчас работает над сайтом.</p>
  
      <p className={styles.footer}>Жду от Вовы мокапы. ❤️</p>
    </div>
  )
}
