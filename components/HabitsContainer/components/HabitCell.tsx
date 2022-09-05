import { FC, useState } from 'react';
import { Icon, Table } from 'semantic-ui-react';

interface HabitCellProps {
  isCompleted: boolean;
}

const HabitCell: FC<HabitCellProps> = ({ isCompleted }) => {
  const { Cell } = Table;
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleToggle = () => setIsChecked(!isChecked);

  return (
    <Cell textAlign="center" onClick={handleToggle}>
      {isChecked && <Icon color="green" name="checkmark" size="large" />}
    </Cell>
  );
};

export default HabitCell;
