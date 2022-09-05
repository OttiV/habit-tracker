import { Habit } from '@/types/Habit';
import { FC } from 'react';
import { Table } from 'semantic-ui-react';
import { HabitRow } from './components';

interface HabistContainerProps {
  habits: Habit[];
}

const HabistContainer: FC<HabistContainerProps> = ({ habits }) => {
  const { Header, Row, HeaderCell, Body } = Table;

  return (
    <Table>
      <Header>
        <Row>
          {habits.map(({ title }) => {
            const formattedTitle = `${title[0].toUpperCase()}${title
              .slice(1)
              .toLowerCase()}`;
            return (
              <HeaderCell textAlign="center" key={title}>
                {formattedTitle}
              </HeaderCell>
            );
          })}
        </Row>
      </Header>
      <Body>
        <HabitRow habits={habits} />
      </Body>
    </Table>
  );
};

export default HabistContainer;
