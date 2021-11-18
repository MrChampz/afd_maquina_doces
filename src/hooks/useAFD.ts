import { useState } from "react";

const candies = {
  "A": 6.00,
  "B": 7.00,
  "C": 8.00
};

/*
  rows = current state
  columns = input character index (1..5, a = 6, b = 7, c = 8)
  [0, 1, 2, *,*, 5, a, b, c]
*/
const transitions = [
  [-1,  1,  2, 0,0,  5,  0,  0,  0],
  [-1,  2,  3, 0,0,  6,  1,  1,  1],
  [-1,  3,  4, 0,0,  7,  2,  2,  2],
  [-1,  4,  5, 0,0,  8,  3,  3,  3],
  [-1,  5,  6, 0,0,  9,  4,  4,  4],
  [-1,  6,  7, 0,0, 10,  5,  5,  5],
  [-1,  7,  8, 0,0,  6, 11,  6,  6],
  [-1,  8,  9, 0,0,  7, 12, 13,  7],
  [-1,  9, 10, 0,0,  8, 12, 14, 15],
  [-1, 10,  9, 0,0,  9, 12, 14, 16],
  [-1, 10, 10, 0,0, 10, 12, 14, 16],
  [-1, -1, -1, 0,0, -1, -1, -1, -1],
  [-1, -1, -1, 0,0, -1, -1, -1, -1],
  [-1, -1, -1, 0,0, -1, -1, -1, -1],
  [-1, -1, -1, 0,0, -1, -1, -1, -1],
  [-1, -1, -1, 0,0, -1, -1, -1, -1],
  [-1, -1, -1, 0,0, -1, -1, -1, -1]
];

const acceptingStates = [11, 12, 13, 14, 15, 16];

const useAFD = () => {
  
  const initialState = 0;

  const [state, setState] = useState(initialState);
  const [accepted, setAccepted] = useState(false);
  const [received, setReceived] = useState(0);
  const [change, setChange] = useState(0);

  const consume = (elem: string) => {
    let elemInt = 0;

    // Dinheiro do usuário
    if (elem === '5' || elem === '2' || elem === '1') {
      elemInt = parseInt(elem);
    } else if (elem === 'a') { // Doce A
      elemInt = 6;
    } else if (elem === 'b') { // Doce B
      elemInt = 7;
    } else if (elem === 'c') { // Doce C
      elemInt = 8;
    }

    if (elem === '5' || elem === '2' || elem === '1') {
      setReceived(received => received += elemInt);
      setChange(change => change += elemInt);
    }

    const newState = transitions[state][elemInt];
    setState(newState);

    if (acceptingStates.includes(newState)) {
      setAccepted(true);
      if (newState === 12) { // A com troco
        setChange(change => change -= candies["A"]);
      } else if (newState === 14) { // B com troco
        setChange(change => change -= candies["B"]);
      } else if (newState === 16) { // C com troco
        setChange(change => change -= candies["C"]);
      } else {
        setChange(change => change -= received);
      }
    }

    return newState;
  }

  const reset = () => {
    setState(initialState);
    setAccepted(false);
    setReceived(0);
    setChange(0);
  }

  return { state, accepted, received, change, consume, reset };
};

export default useAFD;