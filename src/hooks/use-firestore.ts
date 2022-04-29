import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../config/firebase.config";

export const useFirestore = (userId: string) => {
  useEffect(() => {
    let unsubscribe: Unsubscribe;
    const watchData = async () => {
      const q = query(
        collection(db, userId),
        orderBy("date", "desc"),
        limit(72)
      );
      try {
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const documents: any[] = [];
          querySnapshot.forEach((doc) => {
            documents.push({ docId: doc.id, ...doc.data() });
          });
          console.log(documents[0]);
          return unsubscribe;
        });
      } catch (error: any) {
        return { error: { code: error.code, message: error.message } };
      }
      return () => unsubscribe;
    };

    watchData().catch(console.error);
  }, [userId]);
};
