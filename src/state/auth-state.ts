import { User } from "firebase/auth";

export type Status = "idle" | "loading" | "success" | "error";

export interface AuthState {
  status: Status;
  error: IFirebaseAuthErrors | undefined;
  user: User | null;
}

export interface IFirebaseAuthErrors {
  message?: any;
  code?: any;
}

export const initialState: AuthState = {
  status: "idle",
  error: undefined,
  user: null,
};
