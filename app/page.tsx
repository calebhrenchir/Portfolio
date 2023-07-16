import Hero from '@/components/hero'
import Links from '@/components/links'
import WorkHistory from '@/components/work-history'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <ul className="border-b border-neutral-100 dark:border-neutral-800">
        <WorkHistory />
      </ul>
      <Links />
    </>
  )
}
