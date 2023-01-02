import Head from 'next/head'
import Navbar from '../components/Navbar'
import MainBody from '../components/MainBody'
import Cursors from '../components/Cursors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edmund Tsang</title>
        <meta name="description" content="By Edmund" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoD.png" />
      </Head>
      <Cursors/>
      <Navbar/>
      <MainBody/>
    </>
  )
}
