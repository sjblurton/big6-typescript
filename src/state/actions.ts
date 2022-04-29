import { User } from "firebase/auth";
import { IFirebaseAuthErrors, Status } from "./state";

export enum ActionType {
  UpdateUser,
  RemoveUser,
  UpdateStatus,
  ErrorHandle,
}

export interface ErrorHandle {
  type: ActionType.ErrorHandle;
  payload: IFirebaseAuthErrors;
}

export interface UpdateUser {
  type: ActionType.UpdateUser;
  payload: User;
}

export interface RemoveUser {
  type: ActionType.RemoveUser;
}

export interface UpdateStatus {
  type: ActionType.UpdateStatus;
  payload: Status;
}

export type StateActions = UpdateUser | RemoveUser | UpdateStatus | ErrorHandle;
