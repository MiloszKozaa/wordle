import { Input } from '@/components/atoms';
import type { Coordinates, IBoard } from '@/store';
import './Board.scss';

// type Board = string[][];

interface IBoardProps {
  board: IBoard;
  coordinates: Coordinates;
}

const Board = ({ board, coordinates }: IBoardProps) => {
  const [rowCooridnate, letterCoordinate] = coordinates;
  return (
    <div className='board'>
      {board.rows.map((row, rowIndex) => (
        <div key={rowIndex} className='board-row'>
          {row.letters.map((letter, letterIndex) => (
            <Input
              key={letterIndex}
              active={
                rowIndex === rowCooridnate && letterIndex === letterCoordinate
              }>
              {letter}
            </Input>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
