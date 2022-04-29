import { createContext, Dispatch, useReducer } from "react";
import { FirestoreActions } from "./actions";
import { firestoreReducer } from "./firestore-reducer";
import { initialState, FirestoreState } from "./firestore-state";

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
