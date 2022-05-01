import {
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import { FirestoreState } from "../interfaces";
import { FirestoreActions } from "./actions";
import { firestoreReducer } from "./firestore-reducer";
import { initialState } from "./firestore-state";

export const FirestoreContext = createContext<{
  state: FirestoreState;
  dispatch: Dispatch<FirestoreActions>;
  error: string | undefined;
  setError: Dispatch<SetStateAction<string | undefined>>;
  loading: false;
  setLoading: Dispatch<SetStateAction<boolean>>;
}>({
  state: initialState,
  dispatch: () => undefined,
  error: undefined,
  setError: () => {},
  loading: false,
  setLoading: () => {},
});

export const FirestoreProvider = (props: any) => {
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(firestoreReducer, initialState);

  return (
    <FirestoreContext.Provider
      value={{ state, dispatch, error, setError, loading, setLoading }}
      {...props}
    />
  );
};
