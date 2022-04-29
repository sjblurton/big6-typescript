import { Status } from "./auth-state";

export interface FirestoreState {
  status: Status;
  error: IFirebaseAuthErrors | undefined;
}

export interface IFirebaseAuthErrors {
  message?: any;
  code?: any;
}

export const initialState: FirestoreState = {
  status: "idle",
  error: undefined,
};
