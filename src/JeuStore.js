export const POINTJOUEUR1 = 'POINTJOUEUR1';
export const POINTJOUEUR2 = 'POINTJOUEUR2';

export function Score(num) {
  return {
    type: num === 1 ? POINTJOUEUR1 : POINTJOUEUR2,
  };
}

const initialState = {
  player1: 0,
  player2: 0,
  winner: null,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case POINTJOUEUR1:
      if (state.player1 < 30) {
        return { ...state, player1: state.player1 + 15 };
      } else if (state.player1 === 30) {
        return { ...state, winner: 'Player 1' };
      }
      break;

    case POINTJOUEUR2:
      if (state.player2 < 30) {
        return { ...state, player2: state.player2 + 15 };
      } else if (state.player2 === 30) {
        return { ...state, winner: 'Player 2' };
      }
      break;

    default:
      return state;
  }
}
