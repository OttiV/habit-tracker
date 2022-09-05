import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import HabitCell from './HabitCell';

interface HabitProps {
  isCompleted: boolean;
  id: number;
}

interface HabitRowProps {
  habit: {
    meditate: HabitProps;
    stretch: HabitProps;
    workout: HabitProps;
    journal: HabitProps;
  };
  id: number;
}

const HabitRow: FC<HabitRowProps> = ({ habit, id }) => {
  const { meditate, stretch, workout, journal } = habit;
  const { Row, Cell } = Table;

  return (
    <Row>
      <Cell textAlign="center">{id + 1}</Cell>
      <HabitCell isCompleted={meditate.isCompleted} />
      <HabitCell isCompleted={stretch.isCompleted} />
      <HabitCell isCompleted={workout.isCompleted} />
      <HabitCell isCompleted={journal.isCompleted} />
    </Row>
  );
};

export default HabitRow;
