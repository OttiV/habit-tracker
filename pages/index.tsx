import { HabitsContainer, HabitsForm, Layout } from '@/components';
import { Habit } from '@/types/Habit';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

const Home: NextPage = () => {
  const [habits, setHabits] = useState<Habit[]>();
  return (
    <Layout>
      <Head>Habit tracker</Head>
      <h3>Habit tracker</h3>

      <h5>Start tracking your progress</h5>

      {habits ? (
        <HabitsContainer habits={habits} />
      ) : (
        <>
          <div>Insert 5 habits you want to implement in your daily routine</div>
          <HabitsForm setHabits={setHabits} />{' '}
        </>
      )}
    </Layout>
  );
};

export default Home;
