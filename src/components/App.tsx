import { useState } from 'react';
import { Column } from './Column';
import { Circle } from './Circle';
import { Dialog } from './Dialog';

const App = () => {
  const [board, setBoard] = useState<State[][]>(() => {
    return Array.from({ length: 7 }, () => Array(6).fill(0));
  });
  const [activePlayer, setActivePlayer] = useState<State>(1);
  const [hasEnded, setEnded] = useState(false);

  const reset = () => {
    setBoard(Array.from({ length: 7 }, () => Array(6).fill(0)));
    setActivePlayer(1);
    setEnded(false);
  };

  return (
    <main className="bg-black w-full h-screen flex flex-col justify-center items-center">
      <section className="bg-blue p-6 rounded-lg shadow-md flex ">
        {board.map((_, index) => (
          <Column
            key={index}
            col={index}
            board={board}
            setBoard={setBoard}
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            hasEnded={hasEnded}
            setEnded={setEnded}
          />
        ))}
      </section>

      <section>
        <h2 className="text-3xl text-stone-200 my-3 text-center">Player</h2>

        <div className="flex justify-center items-center gap-3">
          <Circle
            state={1}
            classnames={`transition-all duration-300 transform ${
              activePlayer === 1 ? 'scale-110' : 'scale-90'
            }`}
          />
          <Circle
            state={2}
            classnames={`transition-all duration-300 transform ${
              activePlayer === 2 ? 'scale-110' : 'scale-90'
            }`}
          />
        </div>
      </section>

      {hasEnded ? <Dialog activePlayer={activePlayer} reset={reset} /> : null}
    </main>
  );
};

export default App;
