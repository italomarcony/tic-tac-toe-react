import { useState } from "react";
import Board from "./Board";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div>
      <h1>Jogo da Velha</h1>
      <Board squares={squares} />
    </div>
  );
}

export default TicTacToe;
