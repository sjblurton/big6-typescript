import { Timestamp } from "firebase/firestore";

export interface FirestoreState {
  data: IData[] | [];
  latest: IData[] | [];
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
