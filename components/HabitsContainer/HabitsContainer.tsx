import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import { HabitRow } from './components';

const HabistContainer: FC = () => {
  const { Header, Row, HeaderCell, Body } = Table;
  return (
    <Table>
      <Header>
        <Row>
          <HeaderCell textAlign="center">Meditation</HeaderCell>
          <HeaderCell textAlign="center">Stretch</HeaderCell>
          <HeaderCell textAlign="center">Workout</HeaderCell>
          <HeaderCell textAlign="center">Journal</HeaderCell>
        </Row>
      </Header>
      <Body>
        <Row></Row>
        <HabitRow />
      </Body>
    </Table>
  );
};

export default HabistContainer;
