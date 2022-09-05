import { habits } from '@/data';
import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import { HabitRow } from './components';

const HabistContainer: FC = () => {
  const { Header, Row, HeaderCell, Body } = Table;
  return (
    <Table>
      <Header>
        <Row>
          <HeaderCell textAlign="center">#</HeaderCell>
          <HeaderCell textAlign="center">Meditation</HeaderCell>
          <HeaderCell textAlign="center">Stretch</HeaderCell>
          <HeaderCell textAlign="center">Workout</HeaderCell>
          <HeaderCell textAlign="center">Journal</HeaderCell>
        </Row>
      </Header>
      <Body>
        {habits.map((habit, i) => (
          <HabitRow key={i} habit={habit} id={i} />
        ))}
      </Body>
    </Table>
  );
};

export default HabistContainer;
