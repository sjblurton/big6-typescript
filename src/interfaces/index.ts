import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";

export interface IFirebaseAuthErrors {
  message?: any;
  code?: any;
}

export interface IAuthContext {
  user: User | undefined;
  error: IFirebaseAuthErrors;
  loginWithGoogle: () => Promise<
    | {
        user: User;
        error?: undefined;
      }
    | {
        error: string;
        user?: undefined;
      }
  >;
  logout: () => Promise<
    | {
        error: string;
      }
    | undefined
  >;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}
