import { HabitsContainer } from '@/components';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>Habit tracker</Head>

      <HabitsContainer />
    </div>
  );
};

export default Home;
