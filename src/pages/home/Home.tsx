import { Board, Keyboard } from '@/components/molecules';
import letters from '@/constants/letters';
import { useKeyDownListener } from '@/hooks/events/useKeyDownListener';
import { useStoreContext } from '@/providers/StoreProvider';

const Home = () => {
  const { board, setBoardLetter, removeBoardLetter, coordinates } = useStoreContext();
  const keyDownListener = useKeyDownListener({
    onKeyDown: e => {
      const key = e.key.toUpperCase();
      if (
        letters
          .flat()
          .map(l => [l.base.toUpperCase(), l.alt?.toUpperCase()])
          .flat()
          .includes(key)
      ) {
        setBoardLetter(key);
      }
      if (key === 'BACKSPACE') {
       removeBoardLetter()
      }
    },
  });
  return (
    <div>
      <Board board={board} coordinates={coordinates} />
      <Keyboard />
    </div>
  );
};

export default Home;
