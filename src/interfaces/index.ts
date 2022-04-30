import { User } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { Dispatch, SetStateAction } from "react";

export type Status = "idle" | "loading" | "success" | "error";
export interface IFirebaseErrors {
  message?: any;
  code?: any;
}

export interface FirestoreState {
  status: Status;
  error: IFirebaseErrors | undefined;
  data: IData[] | [];
  latest: IData[] | [];
}

export interface AuthState {
  status: Status;
  error: IFirebaseErrors | undefined;
  user: User | null;
}

export interface IAuthContext {
  user: User | undefined;
  error: IFirebaseErrors;
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

export type IsPage = { isPage: "calender" | "clipboard" | "home" | "watch" };
