import Head from 'next/head'
import Navbar from '../components/Navbar'
import MainBody from '../components/MainBody'
import Cursors from '../components/Cursors'

export default function Home() {
  return (
    <>
      <Cursors/>
      <Head>
        <title>Edmund's Portfolio</title>
        <meta name="description" content="By Edmund Tsang" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoD.png" />
      </Head>
      <Navbar/>
      <MainBody/>
    </>
  )
}
