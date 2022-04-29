import { ActionType, StateActions } from "./auth-actions";
import { AuthState } from "./auth-state";

export function stateReducer(
  state: AuthState,
  action: StateActions
): AuthState {
  switch (action.type) {
    case ActionType.UpdateUser:
      console.log(action.payload);
      return { ...state, user: action.payload };

    case ActionType.UpdateStatus:
      return { ...state, status: action.payload };

    case ActionType.ErrorHandler:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
