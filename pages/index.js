import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>www.webreal.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style="background-color:powderblue;">
        <h1>SELAMAT DATANG HENGKER KAWE</h1>
        <p className="description">
          download hengker.exe:
    <a href="https://www.w3schools.com">DOWNLOAD</a>
        </p>
      </main>

    </div>
  )
}
