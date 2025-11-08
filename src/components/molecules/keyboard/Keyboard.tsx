import { Button } from '@/components/atoms';
import letters, { type ILetter } from '@/constants/letters';
import { useState } from 'react';
import './Keyboard.scss';

interface IKeyboardProps {
  onSelect?: (letter: string) => void;
  onSubmit?: () => void;
}

const Keyboard = ({ onSelect, onSubmit }: IKeyboardProps) => {
  const [isAlt, setIsAlt] = useState<boolean>(false);

  const onAlt = () => setIsAlt(prev => !prev);

  const getLetter = (letter: ILetter) =>
    isAlt ? letter.alt ?? letter.base : letter.base;

  return (
    <div className='keyboard'>
      {letters.map(row => (
        <div className='keyboard-row'>
          {row.map(letter => (
            <Button
              disabled={isAlt && !letter.alt}
              onClick={() => onSelect && onSelect(getLetter(letter))}>
              {getLetter(letter)}
            </Button>
          ))}
        </div>
      ))}
      <Button onClick={onAlt}>ALT</Button>
    </div>
  );
};

export default Keyboard;
