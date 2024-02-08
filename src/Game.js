import { useState } from 'react';
import App from './App';

export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentElements = history[currentMove];

  function handlePlay(nextElements) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextElements];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }

  function JumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }
  const moves = history.map((elements, move) => {
    let descriotion;
    if (move > 0) {
      descriotion = 'Go to move #' + move;
    } else {
      descriotion = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => JumpTo(move)}>{descriotion}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <App xIsNext={xIsNext} elements={currentElements} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
