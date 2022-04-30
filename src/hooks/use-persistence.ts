import { inMemoryPersistence, setPersistence } from "firebase/auth";
import { enableIndexedDbPersistence } from "firebase/firestore";
import { useEffect } from "react";
import { auth, db } from "../config/firebase.config";

export const usePersistence = () => {
  useEffect(() => {
    try {
      enableIndexedDbPersistence(db);
      console.log("Persistence on");
    } catch (err: any) {
      if (err.code == "failed-precondition") {
        console.error("failed-precondition");
      } else if (err.code == "unimplemented") {
        console.error("unimplemented");
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
        console.error("failed-precondition");
      } else if (err.code == "unimplemented") {
        console.error("unimplemented");
      } else {
        console.error(err);
      }
    }
  }, []);
};
