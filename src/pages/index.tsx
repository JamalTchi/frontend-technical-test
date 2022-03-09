import type { FC } from 'react'
import { useState, useEffect, } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Conversation } from '../types/conversation';
import { Message } from '../types/message'
import { User } from '../types/user'
import Homepage from './homepage';
import { loggedUserId } from './_app';






const Home: FC = () => {
  const year = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>

      <main className={styles.main}>
        <Homepage />
      </main>

      
    </div>
  )
}

export default Home