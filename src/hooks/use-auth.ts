import { auth, onAuthStateChanged } from "../config/firebase.config";
import { useContext, useEffect } from "react";
import { AuthContext } from "../state/auth-context";
import { ActionType } from "../state/actions";
import { FirestoreService } from "../services/firestore";
import { useFirestore } from "./use-firestore";

export const useAuth = () => {
  const { dispatch } = useContext(AuthContext);
  const [setUserId] = useFirestore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: ActionType.UpdateUser, payload: user });
      user !== null && FirestoreService.createUser(user);
      setUserId(user?.uid);
    });
    return unsubscribe;
  }, [dispatch, setUserId]);
};
