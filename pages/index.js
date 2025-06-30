import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-8">
      <Head>
        <title>Menu Design Dashboard</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Welcome to Menu Design</h1>
      <p className="mb-2">Use the sidebar to navigate between tools.</p>
    </div>
  )
}
