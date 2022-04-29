import { createContext, Dispatch, useReducer } from "react";
import { StateActions } from "./auth-actions";
import { stateReducer } from "./auth-reducer";
import { initialState, AuthState } from "./auth-state";

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<StateActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const AuthProvider = (props: any) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }} {...props} />;
};
