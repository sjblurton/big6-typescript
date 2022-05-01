import { enableIndexedDbPersistence } from "firebase/firestore";
import { createContext, Dispatch, useEffect, useReducer } from "react";
import { db } from "src/config/firebase.config";
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

  useEffect(() => {
    try {
      enableIndexedDbPersistence(db);
      console.log("Persistence on");
    } catch (err: any) {
      if (err.code == "failed-precondition") {
        console.error("failed-precondition firestore");
        console.error(err);
      } else if (err.code == "unimplemented") {
        console.error("unimplemented firestore");
        console.error(err);
      } else {
        console.error(err);
      }
    }
  }, []);

  return <FirestoreContext.Provider value={{ state, dispatch }} {...props} />;
};
