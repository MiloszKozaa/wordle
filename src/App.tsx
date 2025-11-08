import './App.css';
import { Board, Keyboard } from './components/molecules';

function App() {
  // useKeyDownListener();
  return (
    <>
      <Board
        board={{
          status: 'IN_PROGRESS',
          rows: new Array(6).fill({
            isCompleted: false,
            letters: new Array(5).fill(''),
          }),
        }}
      />
      <Keyboard />
    </>
  );
}

export default App;
