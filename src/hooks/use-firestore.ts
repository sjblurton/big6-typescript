import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../config/firebase.config";
import { IData } from "../interfaces";
import { ActionType } from "../state/actions";
import { FirestoreContext } from "../state/firestore-context";
import { useLatestData } from "./use-latest-data";

export const useFirestore = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const { dispatch } = useContext(FirestoreContext);
  useLatestData();

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    const watchData = async () => {
      dispatch({ type: ActionType.UpdateStatus, payload: "loading" });
      if (userId !== undefined) {
        const q = query(
          collection(db, userId),
          orderBy("date", "desc"),
          limit(72)
        );
        try {
          unsubscribe = onSnapshot(q, (querySnapshot) => {
            const documents: IData[] = [];
            querySnapshot.forEach((doc) => {
              const item = { docId: doc.id, ...doc.data() } as IData;
              documents.push(item);
            });
            dispatch({
              type: ActionType.UpdateStateData,
              payload: documents,
            });
            dispatch({ type: ActionType.UpdateStatus, payload: "success" });
          });
        } catch (error: any) {
          dispatch({
            type: ActionType.StateErrors,
            payload: { code: error.code, message: error.message },
          });
        }
      }
    };

    if (userId !== undefined) watchData().catch(console.error);

    return () => {
      unsubscribe;
    };
  }, [userId, dispatch]);

  return [setUserId];
};
