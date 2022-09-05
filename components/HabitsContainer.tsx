import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import HabitRow from './HabitRow';

const HabistContainer: FC = () => {
  const { Header, Row, HeaderCell, Body } = Table;
  return (
    <Table>
      <Header>
        <Row>
          <HeaderCell>Meditation</HeaderCell>
          <HeaderCell>Stretch</HeaderCell>
          <HeaderCell>Workout</HeaderCell>
          <HeaderCell>Journal</HeaderCell>
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
