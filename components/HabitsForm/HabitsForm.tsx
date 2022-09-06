import { Habit } from '@/types/Habit';
import { Formik } from 'formik';
import { FC } from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import * as Yup from 'yup';
import { ErrorMessage } from '../Message';

const validation = Yup.string()
  .min(3, 'Too Short!')
  .max(15, 'Too Long!')
  .required('Required');

const validationSchema = Yup.object().shape({
  value1: validation,
  value2: validation,
  value3: validation,
  value4: validation,
  value5: validation,
});

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
      validationSchema={validationSchema}
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
              name="value1"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value1}
              label="Habit 1"
              labelPosition="left"
            />
          </Field>
          {errors.value1 && touched.value1 && (
            <ErrorMessage message={errors.value1} />
          )}
          <Field>
            <Input
              name="value2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value2}
              label="Habit 2"
              labelPosition="left"
            />
          </Field>
          {errors.value2 && touched.value2 && (
            <ErrorMessage message={errors.value2} />
          )}
          <Field>
            <Input
              name="value3"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value3}
              label="Habit 3"
              labelPosition="left"
            />
          </Field>
          {errors.value3 && touched.value3 && (
            <ErrorMessage message={errors.value3} />
          )}
          <Field>
            <Input
              name="value4"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value4}
              label="Habit 4"
              labelPosition="left"
            />
          </Field>
          {errors.value4 && touched.value4 && (
            <ErrorMessage message={errors.value4} />
          )}
          <Field>
            <Input
              name="value5"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.value5}
              label="Habit 5"
              labelPosition="left"
            />
          </Field>
          {errors.value5 && touched.value5 && (
            <ErrorMessage message={errors.value5} />
          )}
          <Button primary disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default HabitsForm;
