import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
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

export type IWorkout =
  | "Push Ups"
  | "Pull Ups"
  | "Squats"
  | "Leg Raises"
  | "Handstands"
  | "Bridges";

export interface IData {
  comments: string;
  date: Timestamp;
  docId: string;
  level: number;
  reps: number[];
  uid: string;
  workout: IWorkout;
}
