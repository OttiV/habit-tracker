import { Habit } from '@/types/Habit';
import { Formik } from 'formik';
import { FC } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';

interface HabitsFormProps {
  setHabits: (value: Habit[]) => void;
}

const HabitsForm: FC<HabitsFormProps> = ({ setHabits }) => {
  const { Field } = Form;

  const initialValues = {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      // validate={}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const data = {
            isCompleted: false,
            date: new Date(),
          };

          const habits = [
            {
              title: values.value1,
              data,
            },
            {
              title: values.value2,
              data,
            },
            {
              title: values.value3,
              data,
            },
            {
              title: values.value4,
              data,
            },
            {
              title: values.value5,
              data,
            },
          ];
          setHabits(habits);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Field>
            <Input
              type="text"
              name="value1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value1}
              label="Habit 1"
              labelPosition="left"
            />
          </Field>
          <Field>
            <Input
              type="text"
              name="value2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value2}
              label="Habit 2"
              labelPosition="left"
            />
          </Field>
          <Field>
            <Input
              type="text"
              name="value3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value3}
              label="Habit 3"
              labelPosition="left"
            />
          </Field>
          <Field>
            <Input
              type="text"
              name="value4"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value4}
              label="Habit 4"
              labelPosition="left"
            />
          </Field>
          <Field>
            <Input
              type="text"
              name="value5"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value5}
              label="Habit 5"
              labelPosition="left"
            />
          </Field>
          <Button primary disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default HabitsForm;
