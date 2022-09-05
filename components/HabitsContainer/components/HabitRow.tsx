import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import { habits } from '@/data';
import HabitCell from './HabitCell';

const HabitRow: FC = () => {
  const { meditate, stretch, workout, journal } = habits;
  const { Row } = Table;

  return (
    <Row>
      <HabitCell isCompleted={meditate.isCompleted} />
      <HabitCell isCompleted={stretch.isCompleted} />
      <HabitCell isCompleted={workout.isCompleted} />
      <HabitCell isCompleted={journal.isCompleted} />
    </Row>
  );
};

export default HabitRow;
