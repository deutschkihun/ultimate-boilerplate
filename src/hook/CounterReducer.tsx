import React, { useReducer } from "react";
import { DECREMENT, INCREMENT, RANDOM, RESET } from "../_actions/type";
import { initialState, ReducerFunction } from "../_reducer/reducer";

interface Props {
  step: number;
  min: number;
  max: number;
}

export const CounterReducer = ({ step = 1, min = 0, max = 10 }: Props) => {
  const [state, dispatch] = useReducer(ReducerFunction, initialState);
  return (
    <>
      <p>
        reducer boilerplate / step: {step}, min : {min}, max: {max}
      </p>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: INCREMENT, step, max, min })}>
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: DECREMENT, step, max, min })}>
        DECREMENT
      </button>
      <button onClick={() => dispatch({ type: RANDOM, step, max, min })}>
        RANDOM
      </button>
      <button onClick={() => dispatch({ type: RESET, step, max, min })}>
        RESET
      </button>
    </>
  );
};
