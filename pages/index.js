import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>facebook</title> {/* here we inject the name of the bar */}
      </Head>

      <Header />
      {/* Header */}
      <main className="flex">
        {/* sidebar */}
        <Sidebar /> {/* here we are declaring our sidebar */}
        {/* feed */}
        {/* widgets */}
      </main>
      {/* <footer>
        <span>Made with ❤ by Mayank</span>
      </footer> */}
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: { session }
  };
} //this code is enough to tell the next.js that we are going
//to have server side rendering
