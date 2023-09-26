import Image from 'next/image'
import { Inter } from '@next/font/google'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Project from '@/components/Project'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <HeroSection/>
      <About/>
      <Project/>
    </main>
  )
}
