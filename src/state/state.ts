import { User } from "firebase/auth";

export interface IState {
  status: Status;
  error: IFirebaseAuthErrors | undefined;
  user: User | undefined;
}

export interface IFirebaseAuthErrors {
  message?: any;
  code?: any;
}

export enum Status {
  idle = "idle",
  loading = "loading",
  success = "success",
  error = "error",
}

export const initialState: IState = {
  status: Status.idle,
  error: undefined,
  user: undefined,
};
