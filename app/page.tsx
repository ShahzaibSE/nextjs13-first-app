import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <Link href="/home">Home&nbsp</Link>
          <Link href="/gallery">Gallery&nbsp</Link>
          <Link href="/about">About&nbsp</Link>
        </div>
        <br/>
        <div className={styles.greeting_text_container}>
          <h1>Hello World from Shahzaib Noor</h1>
        </div>
      </div>
    </main>
  )
}
