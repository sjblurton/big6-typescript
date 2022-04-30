import { createContext, Dispatch, useReducer } from "react";
import { FirestoreState } from "../interfaces";
import { FirestoreActions } from "./actions";
import { firestoreReducer } from "./firestore-reducer";
import { initialState } from "./firestore-state";

export const FirestoreContext = createContext<{
  state: FirestoreState;
  dispatch: Dispatch<FirestoreActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const FirestoreProvider = (props: any) => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState);

  return <FirestoreContext.Provider value={{ state, dispatch }} {...props} />;
};
