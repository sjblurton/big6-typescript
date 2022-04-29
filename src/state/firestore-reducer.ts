import { ActionType, FirestoreActions } from "./actions";
import { FirestoreState } from "./firestore-state";

export function firestoreReducer(
  state: FirestoreState,
  action: FirestoreActions
): FirestoreState {
  switch (action.type) {
    case ActionType.UpdateStatus:
      return { ...state, status: action.payload };

    case ActionType.ErrorHandler:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
