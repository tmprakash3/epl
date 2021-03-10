import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PlayersList, { ALL_CLUBS_QUERY, ALL_COUNTRIES_QUERY } from './components/playersList'


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>English Premier League Players Directory</h1>
      <PlayersList />
    </div>
  )
}
