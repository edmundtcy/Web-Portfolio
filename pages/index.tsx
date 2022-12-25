import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edmund's Portfolio</title>
        <meta name="description" content="By Edmund Tsang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoD.png" />
      </Head>
      <Navbar/>
    </>
  )
}
