import { auth, db, onAuthStateChanged } from "src/config/firebase.config";
import { ReactNode, useContext, useEffect } from "react";
import { AuthContext } from "src/state/auth-context";
import { ActionType } from "src/state/actions";
import { FirestoreService } from "src/services/firestore";
import { useFirestore } from "src/hooks/use-firestore";
import { inMemoryPersistence, setPersistence } from "firebase/auth";
import { enableIndexedDbPersistence } from "firebase/firestore";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
};

export const AuthStateChange = ({ children }: Props) => {
  const { push, pathname } = useRouter();
  const { dispatch, state } = useContext(AuthContext);
  const [setUserId] = useFirestore();

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

  useEffect(() => {
    try {
      setPersistence(auth, inMemoryPersistence);
      console.log("Auth persistence on");
    } catch (err: any) {
      if (err.code == "failed-precondition") {
        console.error("failed-precondition auth");
        console.error(err);
      } else if (err.code == "unimplemented") {
        console.error("unimplemented auth");
        console.error(err);
      } else {
        console.error(err);
      }
    }
  }, []);

  useEffect(() => {
    dispatch({ type: ActionType.UpdateStatus, payload: "loading" });
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: ActionType.UpdateUser, payload: user });
      user !== null && FirestoreService.createUser(user);
      setUserId(user?.uid);
      user === null && push("/");
      user !== null && pathname === "/" && push("dashboard");
      dispatch({ type: ActionType.UpdateStatus, payload: "success" });
    });
    return unsubscribe;
  }, [dispatch, setUserId]);

  if (state.status === "loading") {
    return <div>Loading</div>;
  }
  return children;
};
