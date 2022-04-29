import { createContext, Dispatch, useReducer } from "react";
import { StateActions } from "./actions";
import { stateReducer } from "./reducer";
import { initialState, IState } from "./state";

const StateContext = createContext<{
  state: IState;
  dispatch: Dispatch<StateActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const StateProvider = (props: any) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return <StateContext.Provider value={{ state, dispatch }} {...props} />;
};
