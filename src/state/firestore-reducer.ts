import { FirestoreState } from "../interfaces";
import { ActionType, FirestoreActions } from "./actions";

export function firestoreReducer(
  state: FirestoreState,
  action: FirestoreActions
): FirestoreState {
  switch (action.type) {
    case ActionType.UpdateStatus:
      return { ...state, status: action.payload };

    case ActionType.StateErrors:
      return { ...state, error: action.payload };

    case ActionType.UpdateStateData:
      return { ...state, data: action.payload };

    case ActionType.LatestState:
      return { ...state, latest: action.payload };

    default:
      return state;
  }
}
