import Image from 'next/image'

export const metadata = {
  title: 'Mitroplus Labs',
  description: 'Blockchain, Metaverse & Artificial Intelligence for Africa',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the Home page</h1>
    </main>
  )
}
