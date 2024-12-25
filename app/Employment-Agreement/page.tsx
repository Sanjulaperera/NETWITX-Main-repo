import IframeEmbed from '@/components/IframeEmbed'
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Employment Agreement Form</h1>
      <IframeEmbed
        src="https://tally.so/embed/n0oKDB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        title="Employment Agreement"
        className="w-full aspect-video"
      />
    </main>
  )
}

