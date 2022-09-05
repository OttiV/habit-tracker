import { HabitsContainer, Layout } from '@/components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>Habit tracker</Head>
      <h3>Habit tracker</h3>
      <HabitsContainer />
    </Layout>
  );
};

export default Home;
