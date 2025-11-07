import classNames from 'classnames';
import { type HTMLAttributes } from 'react';

type Size = 'COMPACT' | 'DEFAULT' | 'LARGE';
interface ISize {
  size?: Size;
}

interface IButtonProps extends HTMLAttributes<HTMLButtonElement>, ISize {}

const Button = ({ size = 'DEFAULT', ...props }: IButtonProps) => {
  const className = classNames(['button', props.className], { size });
  return <button {...props} className={className} />;
};

export default Button;
