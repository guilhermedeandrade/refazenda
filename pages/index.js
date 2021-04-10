import Head from 'next/head'

import { Container } from '../components'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>refazenda</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥑</text></svg>"
        />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl sm:text-6xl text-center font-bold text-yellow-500 tracking-widest text-shadow-md">
          refazenda
        </h1>

        <iframe
          className="w-10/12 mt-6 h-1/3 sm:w-1/2 sm:h-1/2"
          src="https://www.youtube.com/embed/uT21kqCoQro"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </main>
    </Container>
  )
}
