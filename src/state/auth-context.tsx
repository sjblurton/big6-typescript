import { createContext, Dispatch, useReducer } from "react";
import { AuthActions } from "./actions";
import { authReducer } from "./auth-reducer";
import { initialState, AuthState } from "./auth-state";

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const AuthProvider = (props: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }} {...props} />;
};
