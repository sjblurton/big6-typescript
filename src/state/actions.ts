import { User } from "firebase/auth";
import { IFirebaseErrors, Status } from "../interfaces";

export enum ActionType {
  UpdateUser,
  UpdateStatus,
  AuthErrors,
  UpdateState,
  StateErrors,
}

export interface AuthErrors {
  type: ActionType.AuthErrors;
  payload: IFirebaseErrors;
}

export interface StateErrors {
  type: ActionType.StateErrors;
  payload: IFirebaseErrors;
}

export interface UpdateUser {
  type: ActionType.UpdateUser;
  payload: User | null;
}

export interface UpdateStatus {
  type: ActionType.UpdateStatus;
  payload: Status;
}

export type AuthActions = UpdateUser | UpdateStatus | AuthErrors;
export type FirestoreActions = UpdateStatus | StateErrors;
