import { type HTMLAttributes } from 'react';
import './Input.scss'

interface IInputProps extends HTMLAttributes<HTMLDivElement> {}

const Input = ({ ...props }: IInputProps) => {
  return <div className='input' {...props} />;
};

export default Input;
