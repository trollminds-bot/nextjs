import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to :trollminds :D 
        </h1>

        <p className={styles.description}>
          For trolls by trolls, with love!{' '}
          <code className={styles.code}>hack</code>
        </p>

        <div className={styles.grid}>
          <a href="https://giphy.com/gifs/cat-dancing-dance-M5T9ySMRsE98c" className={styles.card} >
          <iframe src="https://giphy.com/embed/M5T9ySMRsE98c"  width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen className={styles.card} ></iframe>
            <h3>Cats &#x1F419;</h3>
            <p>Step 1. Find a cat troll video.</p>
          </a>

          <a href="https://giphy.com/gifs/fly-ufo-spaceship-26BoCVdjSJOWT0Fpu" className={styles.card}>
          <iframe src="https://giphy.com/embed/26BoCVdjSJOWT0Fpu" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen className={styles.card} ></iframe>
            <h3>Aliens &#x1F991;</h3>
            <p>You know what's happening!</p>
          </a>

          <a href="https://giphy.com/gifs/alien-cow-flying-saucer-ZEl0gSSnbEzJ7qr18E" className={styles.card} >
            <iframe src="https://giphy.com/embed/ZEl0gSSnbEzJ7qr18E" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen className={styles.card} ></iframe>
            <h3>The Future &#x1F42E;</h3>
            <p>When the cow gains power!!</p>
          </a>

          <a href="https://giphy.com/gifs/pbskids-happy-space-8lNaZuf2ZmF54oalhP" className={styles.card}>
          <iframe src="https://giphy.com/embed/8lNaZuf2ZmF54oalhP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen className={styles.card} ></iframe>
            <h3>Happy Space !!</h3>
            <p>
              The End :D
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
