import React from 'react';
import { useSelector } from 'react-redux';
import PointJoueur from './PointJoueur';
import './App.css';

export default function App() {
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);
  const winner = useSelector((state) => state.winner);
  return (
    <div className="App1">
  <h1>🎾 Score Game</h1>

  <div className="score-box">
    {winner && <h2>🏆 Winner: {winner}</h2>}
    <h3>🎯 Score: {player1} - {player2}</h3>
  </div>

  <div className="buttons">
    <PointJoueur num={1} />
    <PointJoueur num={2} />
  </div>
</div>
  );
}