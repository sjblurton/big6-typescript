import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { getErrorMessage } from "src/helpers/error-handler";
import { db } from "../config/firebase.config";
import { IData } from "../interfaces";
import { ActionType } from "../state/actions";
import { FirestoreContext } from "../state/firestore-context";
import { useLatestData } from "./use-latest-data";

export const useFirestore = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const { dispatch, setLoading, setError } = useContext(FirestoreContext);
  useLatestData();

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    const watchData = async () => {
      setLoading(true);
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
            setLoading(false);
          });
        } catch (error: unknown) {
          setError(getErrorMessage(error));
        }
      }
    };

    if (userId !== undefined) watchData();

    return () => {
      unsubscribe;
    };
  }, [userId]); //eslint-disable-line

  return setUserId;
};
