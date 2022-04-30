import { FirestoreState } from "../interfaces";

export const initialState: FirestoreState = {
  status: "idle",
  error: undefined,
  data: [],
  latest: [],
};
