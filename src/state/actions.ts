import { IData } from "../interfaces";

export enum ActionType {
  LatestState,
  UpdateStateData,
}

export interface LatestState {
  type: ActionType.LatestState;
  payload: IData[] | [];
}

export interface UpdateStateData {
  type: ActionType.UpdateStateData;
  payload: IData[] | [];
}

export type FirestoreActions = LatestState | UpdateStateData;
