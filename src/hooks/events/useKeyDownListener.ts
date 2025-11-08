import { useEffect } from 'react';

export const useKeyDownListener = () => {
  const onKeyDown = (event: KeyboardEvent) => console.log(event.key);
  useEffect(() => {
    addEventListener('keydown', onKeyDown);

    return () => removeEventListener('keydown', onKeyDown);
  }, []);
};
