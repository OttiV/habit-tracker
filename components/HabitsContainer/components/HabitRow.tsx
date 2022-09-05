import { Habit } from '@/types/Habit';
import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import HabitCell from './HabitCell';

interface HabitRowProps {
  habits: Habit[];
}

const HabitRow: FC<HabitRowProps> = ({ habits }) => {
  const { Row } = Table;

  return (
    <Row>
      {habits.map(({ data, title }) => (
        <HabitCell key={title} isCompleted={data.isCompleted} />
      ))}
    </Row>
  );
};

export default HabitRow;
