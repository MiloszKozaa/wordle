import { Input } from '@/components/atoms';
import './Board.scss';

// type Board = string[][];

type Status = 'COMPLETED' | 'FAILED' | 'IN_PROGRESS';

export interface IBoardRow {
  isCompleted: boolean;
  letters: string[];
}

export interface IBoard {
  status: Status;
  rows: IBoardRow[];
}

type Coordinates = [number, number];

interface IBoardProps {
  board: IBoard;
  focusedInput?: Coordinates;
}

const Board = ({ board }: IBoardProps) => {
  return (
    <div className='board'>
      {board.rows.map(row => (
        <div className='board-row'>
          {row.letters.map(letter => (
            <Input>{letter}</Input>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
