import { User } from "firebase/auth";
import { IData, IFirebaseErrors, Status } from "../interfaces";

export enum ActionType {
  UpdateUser,
  UpdateStatus,
  AuthErrors,
  LatestState,
  StateErrors,
  UpdateStateData,
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

export interface LatestState {
  type: ActionType.LatestState;
  payload: IData[] | [];
}

export interface UpdateStateData {
  type: ActionType.UpdateStateData;
  payload: IData[] | [];
}

export type AuthActions = UpdateUser | UpdateStatus | AuthErrors;
export type FirestoreActions =
  | UpdateStatus
  | StateErrors
  | LatestState
  | UpdateStateData;
