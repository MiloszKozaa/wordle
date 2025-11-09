import { useEffect } from 'react';

interface IUseKeyDownListener {
  onKeyDown: (event: KeyboardEvent) => void;
}

export const useKeyDownListener = ({ onKeyDown }: IUseKeyDownListener) => {
  useEffect(() => {
    addEventListener('keydown', onKeyDown);

    return () => removeEventListener('keydown', onKeyDown);
  }, []);
};
