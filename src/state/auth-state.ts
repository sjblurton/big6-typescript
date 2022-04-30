import { AuthState } from "../interfaces";

export const initialState: AuthState = {
  status: "idle",
  error: undefined,
  user: null,
};
