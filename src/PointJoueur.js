import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Score } from './JeuStore';

export default function PointJoueur({ num }) {
  const dispatch = useDispatch();

  return (
    <button className='button' onClick={() => dispatch(Score(num))}>
      Add Point to Player {num}
    </button>
  );
}
