import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Status = 'COMPLETED' | 'FAILED' | 'IN_PROGRESS';
export interface IBoardRow {
  isCompleted: boolean;
  letters: (string | null)[];
}

export interface IBoard {
  status: Status;
  rows: IBoardRow[];
  generatedAt: Date;
  completedAt: Date | null;
}

export type Coordinates = [number, number];

export interface IBoardState {
  board: IBoard;
  history: IBoard[];
  coordinates: Coordinates;
}
export interface IBoardActions {
  setNewBoard: (board?: IBoard) => IBoard;
  setBoardLetter: (letter: string) => IBoard;
  removeBoardLetter: () => IBoard;
  setBoardStatus: (status: Status) => IBoard;
  setCoordinates: (coordinates?: Coordinates) => void;
}

export interface IBoardStore extends IBoardState, IBoardActions {}

export const getInitialBoard = (rows = 6, letters = 5): IBoard => ({
  status: 'IN_PROGRESS',
  rows: new Array(rows).fill({
    isCompleted: false,
    letters: new Array(letters).fill(null),
  }),
  generatedAt: new Date(),
  completedAt: null,
});

const initialCoordinates: Coordinates = [0, 0];

const getBoardMaxCoordinate = (board: IBoard): Coordinates => [
  board.rows.length - 1,
  board.rows[0].letters.length - 1,
];

const getNextCoordinate = (
  board: IBoard,
  coordinates: Coordinates
): Coordinates => {
  const [row, letter] = coordinates;

  const [maxRows, maxLetters] = getBoardMaxCoordinate(board);

  if (letter < maxLetters && row <= maxRows) {
    return [row, letter + 1];
  }
  if (letter === maxLetters && row < maxRows) {
    return [row + 1, 0];
  }

  return coordinates;
};

const getPrevCoordinate = (coordinates: Coordinates): Coordinates => {
  const [row, letter] = coordinates;

  if (letter > 0 && row > 0) {
    return [row, letter - 1];
  }

  return coordinates;
};

export const store = create<IBoardStore>()(
  persist(
    (set, get) => ({
      board: getInitialBoard(),
      history: [],
      coordinates: initialCoordinates,
      setNewBoard: board => {
        const state = get();

        const newBoard = board ?? getInitialBoard();

        set({
          history: [...state.history, state.board],
          board: newBoard,
          coordinates: initialCoordinates,
        });

        return newBoard;
      },
      setBoardStatus: status => {
        const newBoard: IBoard = { ...get().board, status };
        set({ board: newBoard });
        return newBoard;
      },
      setBoardLetter: newLetter => {
        const [row, letter] = get().coordinates;
        let board = get().board;
        const nextCoordinate = getNextCoordinate(board, get().coordinates);

        board.rows[row].letters[letter] = newLetter;

        if (!board.rows[row].letters.includes(null)) {
          board.rows[row].isCompleted = true;
        }

        set({
          board: board,
          coordinates: nextCoordinate,
        });

        return board;
      },
      removeBoardLetter: () => {
        // const  = get().coordinates;
        let board = get().board;
        const coordinates = getPrevCoordinate(get().coordinates);
        const [row, letter] = coordinates;

        board.rows[row].letters[letter] = null;

        set({
          board: board,
          coordinates: coordinates,
        });

        return board;
      },
      setCoordinates: coordinates =>
        set({ coordinates: coordinates ?? initialCoordinates }),
    }),
    { name: 'wordle-store' }
  )
);
