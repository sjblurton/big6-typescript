import { User } from "firebase/auth";
import { ActionType, RemoveUser, StateActions, UpdateUser } from "./actions";
import { IState } from "./state";

export function stateReducer(state: IState, action: StateActions): IState {
  switch (action.type) {
    case ActionType.UpdateUser:
      return { ...state, user: action.payload };

    case ActionType.RemoveUser:
      return { ...state, user: undefined };

    case ActionType.ErrorHandle:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

export const updateUser = (user: User): UpdateUser => ({
  type: ActionType.UpdateUser,
  payload: user,
});

export const removeUser = (): RemoveUser => ({
  type: ActionType.RemoveUser,
});
