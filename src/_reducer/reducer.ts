export const initialState = { count: 0 };

export const ReducerFunction = (
  state = { count: 0 },
  action: { type: string; max: number; min: number; step: number }
): {
  count: number;
} => {
  switch (action.type) {
    case "INCREMENT":
      return state.count < action.max
        ? { count: state.count + action.step }
        : state;
    case "DECREMENT":
      return state.count > action.min
        ? { count: state.count - action.step }
        : state;
    case "RESET":
      return initialState;
    case "RANDOM":
      return {
        count:
          Math.floor(Math.random() * (action.max - action.min)) + action.min,
      };
    default:
      throw new Error("Unsupported action type");
  }
};
