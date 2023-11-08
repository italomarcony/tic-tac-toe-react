import Square from "./Square";
import Strike from "./Strike";

function Board({ squares }) {
  return (
    <div className="board">
      <Square value={squares[0]} className="right-border bottom-border" />
      <Square value={squares[1]} className="right-border bottom-border" />
      <Square value={squares[2]} className="bottom-border" />
      <Square value={squares[3]} className="right-border bottom-border" />
      <Square value={squares[4]} className="right-border bottom-border" />
      <Square value={squares[5]} className="bottom-border" />
      <Square value={squares[6]} className="right-border" />
      <Square value={squares[7]} className="right-border" />
      <Square value={squares[8]} />
      <Strike />
    </div>
  );
}

export default Board;
