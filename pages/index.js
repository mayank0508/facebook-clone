import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>facebook</title> {/* here we inject the name of the bar */}
      </Head>
      <h1>Lets Build Facebook</h1>
      <footer>
        <span>Made with ❤ by Mayank</span>
      </footer>
    </div>
  )
}
