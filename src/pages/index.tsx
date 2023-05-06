import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Information from '@/components/Contact'
import Personal from '@/components/Personal'
import Projects from '@/components/Projects'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>
      <Personal/>
      <Projects/>
      <Information/>
      <Footer/>
    </>
  )
}
