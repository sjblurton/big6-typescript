import { User } from "firebase/auth";
import { IFirebaseAuthErrors, Status } from "./auth-state";

export enum ActionType {
  UpdateUser,
  UpdateStatus,
  ErrorHandler,
}

export interface ErrorHandler {
  type: ActionType.ErrorHandler;
  payload: IFirebaseAuthErrors;
}

export interface UpdateUser {
  type: ActionType.UpdateUser;
  payload: User | null;
}

export interface UpdateStatus {
  type: ActionType.UpdateStatus;
  payload: Status;
}

export type StateActions = UpdateUser | UpdateStatus | ErrorHandler;
