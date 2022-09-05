import { Habit } from '@/types/Habit';
import { FC, useState } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

interface HabitsFormProps {
  setHabits: (value: Habit[]) => void;
}

const HabitsForm: FC<HabitsFormProps> = ({ setHabits }) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');

  const onSubmit = () => {
    const habits = [
      {
        title: value1,
        data: {
          isCompleted: false,
          date: new Date(),
        },
      },
      {
        title: value2,
        data: {
          isCompleted: false,
          date: new Date(),
        },
      },
      {
        title: value3,
        data: {
          isCompleted: false,
          date: new Date(),
        },
      },
      {
        title: value4,
        data: {
          isCompleted: false,
          date: new Date(),
        },
      },
      {
        title: value5,
        data: {
          isCompleted: false,
          date: new Date(),
        },
      },
    ];

    setHabits(habits);
  };
  const { Field } = Form;
  return (
    <Form onSubmit={onSubmit}>
      <Field>
        <Input
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          label="Habit 1"
          labelPosition="left"
        />
      </Field>
      <Field>
        <Input
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          label="Habit 2"
          labelPosition="left"
        />
      </Field>
      <Field>
        <Input
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          label="Habit 3"
          labelPosition="left"
        />
      </Field>
      <Field>
        <Input
          value={value4}
          onChange={(e) => setValue4(e.target.value)}
          label="Habit 4"
          labelPosition="left"
        />
      </Field>
      <Field>
        <Input
          value={value5}
          onChange={(e) => setValue5(e.target.value)}
          label="Habit 5"
          labelPosition="left"
        />
      </Field>
      <Button primary>Submit</Button>
    </Form>
  );
};

export default HabitsForm;
