import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>facebook</title> {/* here we inject the name of the bar */}
      </Head>
      <h1>Lets Build Facebook</h1>
      {/* <footer>
        <span>Made with ❤ by Mayank</span>
      </footer> */}
    </div>
  )
}
