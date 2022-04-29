import {
  collection,
  enableIndexedDbPersistence,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase.config";
import { IData } from "../interfaces";

export const useFirestore = () => {
  const [userId, setUserId] = useState<string | undefined>(undefined);

  useEffect(() => {
    enableIndexedDbPersistence(db).catch((err: any) => {
      if (err.code == "failed-precondition") {
        console.error("failed-precondition");
      } else if (err.code == "unimplemented") console.error("unimplemented");
    });
  }, []);

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    const watchData = async () => {
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
            console.log(documents);
            return unsubscribe;
          });
        } catch (error: any) {
          return { error: { code: error.code, message: error.message } };
        }
      }
    };

    if (userId !== undefined) watchData().catch(console.error);

    return () => {
      unsubscribe;
    };
  }, [userId]);

  return [setUserId];
};
