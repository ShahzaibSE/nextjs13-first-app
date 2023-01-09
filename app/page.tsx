"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// import Link from 'next/link'
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div style={{margin: '0 auto'}}>
          <Link href="/home" style={{marginRight: 5}}> <ExternalLinkIcon/> Home</Link>
          <Link href="/gallery" style={{marginRight: 5}}><ExternalLinkIcon/> Gallery</Link>
          <Link href="/about" style={{marginRight: 5}}><ExternalLinkIcon/> About</Link>
        </div>
        <br />
        <div className={styles.greeting_text_container}>
          <h1>Hello World from Shahzaib Noor</h1>
        </div>
      </div>
    </main>
  );
}
