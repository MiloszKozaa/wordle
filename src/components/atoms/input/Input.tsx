import classNames from 'classnames';
import { type HTMLAttributes } from 'react';
import './Input.scss';

interface IInputProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const Input = ({ active, ...props }: IInputProps) => {
  const className = classNames(['input', props.className], { active });
  return <div className={className} {...props} />;
};

export default Input;
