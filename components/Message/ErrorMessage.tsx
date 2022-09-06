import { FC } from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  const style = { color: 'red', padding: 5, fontWeight: 600 };
  return <div style={style}>{message}</div>;
};

export default ErrorMessage;
