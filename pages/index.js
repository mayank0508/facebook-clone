import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>facebook</title> {/* here we inject the name of the bar */}
      </Head>

      <Header />
      {/* Header */}
      <main>
        {/* sidebar */}
        {/* feed */}
        {/* widgets */}
      </main>
      {/* <footer>
        <span>Made with ❤ by Mayank</span>
      </footer> */}
    </div>
  );
}
