import { AuthState } from "../interfaces";
import { ActionType, AuthActions } from "./actions";

export function authReducer(state: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case ActionType.UpdateUser:
      return { ...state, user: action.payload };

    case ActionType.UpdateStatus:
      return { ...state, status: action.payload };

    case ActionType.AuthErrors:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
