import { FC, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { habits } from '@/data';

const HabitRow: FC = () => {
  const { meditate, stretch, workout, journal } = habits;
  const [isMeditateCompleted, setIsMeditateCompleted] = useState(
    meditate.isCompleted
  );
  const [isStretchCompleted, setIsStretchCompleted] = useState(
    stretch.isCompleted
  );
  const [isWorkoutCompleted, setIsWorkoutCompleted] = useState(
    workout.isCompleted
  );
  const [isJournalCompleted, setIsJournalCompleted] = useState(
    journal.isCompleted
  );

  const { Row, Cell } = Table;
  const toggleCheckmark = (isChecked: boolean): string =>
    isChecked ? '✔️' : '';
  return (
    <Row>
      <Cell>
        <Button onClick={() => setIsMeditateCompleted(!isMeditateCompleted)}>
          {toggleCheckmark(isMeditateCompleted)}
        </Button>
      </Cell>
      <Cell>
        <Button onClick={() => setIsStretchCompleted(!isStretchCompleted)}>
          {toggleCheckmark(isStretchCompleted)}
        </Button>
      </Cell>
      <Cell>
        <Button onClick={() => setIsWorkoutCompleted(!isWorkoutCompleted)}>
          {toggleCheckmark(isWorkoutCompleted)}
        </Button>
      </Cell>
      <Cell>
        <Button onClick={() => setIsJournalCompleted(!isJournalCompleted)}>
          {toggleCheckmark(isJournalCompleted)}
        </Button>
      </Cell>
    </Row>
  );
};

export default HabitRow;
