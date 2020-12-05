import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sleeping Forest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Sleeping Forest!</h1>

        <p className={styles.description}>Линча сейчас работает над сайтом.</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Супер мега вокалисты &rarr;</h3>
            <p>Этот раздел скоро появится.</p>
          </div>

          <div className={styles.card}>
            <h3>Опупенные художники &rarr;</h3>
            <p>Этот раздел скоро появится.</p>
          </div>

          <div className={styles.card}>
            <h3>Лучшие в мире переводчики &rarr;</h3>
            <p>Этот раздел скоро появится.</p>
          </div>

          <div className={styles.card}>
            <h3>Профессиональные виддеры и звуковики &rarr;</h3>
            <p>Этот раздел скоро появится.</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Жду от Вовы мокапы. ❤️</footer>
    </div>
  )
}
