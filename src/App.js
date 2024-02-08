import Element from './Element';

export default function App({ xIsNext, elements, onPlay }) {
  //

  function handleClick(i) {
    if (elements[i] || calculateWinner(elements)) return; //проверка нажат ли уже квадрат
    const nextElement = elements.slice();
    if (xIsNext) {
      nextElement[i] = 'X';
    } else {
      nextElement[i] = 'O';
    }
    onPlay(nextElement);
  }

  const winner = calculateWinner(elements);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Element value={elements[0]} onclick={() => handleClick(0)} />
        <Element value={elements[1]} onclick={() => handleClick(1)} />
        <Element value={elements[2]} onclick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Element value={elements[3]} onclick={() => handleClick(3)} />
        <Element value={elements[4]} onclick={() => handleClick(4)} />
        <Element value={elements[5]} onclick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Element value={elements[6]} onclick={() => handleClick(6)} />
        <Element value={elements[7]} onclick={() => handleClick(7)} />
        <Element value={elements[8]} onclick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(elements) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      elements[a] &&
      elements[a] === elements[b] &&
      elements[a] === elements[c]
    ) {
      return elements[a];
    }
  }
  return null;
}
