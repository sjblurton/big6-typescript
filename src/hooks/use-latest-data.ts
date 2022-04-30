import useArray from "@sjblurton/use-array";
import { useContext, useEffect } from "react";
import { IData, IWorkout } from "../interfaces";
import { ActionType } from "../state/actions";
import { FirestoreContext } from "../state/firestore-context";

export const useLatestData = () => {
  const { state, dispatch } = useContext(FirestoreContext);
  const latest = useArray<IData>([]);

  useEffect(() => {
    let array: IWorkout[] = [];
    latest.set(
      state.data.filter((item) => {
        if (!array.includes(item.workout)) {
          array.push(item.workout);
          return true;
        }
        return false;
      })
    );

    dispatch({ type: ActionType.LatestState, payload: latest.array });
  }, [state.data]); //eslint-disable-line
};
