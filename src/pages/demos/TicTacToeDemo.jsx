import React, { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import DemoHeader from "../../components/demos/DemoHeader";

const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

function winner(board) {
  for (const [a,b,c] of lines) if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  return board.every(Boolean) ? "Draw" : null;
}

export default function TicTacToeDemo() {
  const [board,setBoard] = useState(Array(9).fill(null));
  const [turn,setTurn] = useState("X");
  const result = useMemo(()=>winner(board),[board]);

  const play = (i) => {
    if (board[i] || result) return;
    const next=[...board]; next[i]=turn; setBoard(next); setTurn(turn==="X"?"O":"X");
  };
  const reset=()=>{setBoard(Array(9).fill(null));setTurn("X")};

  return (
    <>
      <DemoHeader title="Tic-Tac-Toe" description="A complete two-player game with win and draw detection." />
      <main className="demo-page">
        <div className="container game-wrap">
          <div className="game-card">
            <div className="game-status">{result ? (result==="Draw" ? "It's a draw!" : `Player ${result} wins!`) : `Player ${turn}'s turn`}</div>
            <div className="board">{board.map((cell,i)=><button key={i} className={`cell ${cell||""}`} onClick={()=>play(i)}>{cell}</button>)}</div>
            <button className="reset-btn" onClick={reset}><RotateCcw size={17}/> New Game</button>
          </div>
        </div>
      </main>
    </>
  );
}