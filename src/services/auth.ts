import { Dispatch } from "react";
import { googleLogin } from "../config/firebase.config";
import { ActionType, AuthActions } from "../state/actions";

export const AuthService = {
  handleGoogle: async (dispatch: Dispatch<AuthActions>) => {
    dispatch({ type: ActionType.UpdateStatus, payload: "loading" });
    try {
      await googleLogin();
      dispatch({ type: ActionType.UpdateStatus, payload: "success" });
    } catch (error: any) {
      dispatch({ type: ActionType.UpdateStatus, payload: "error" });
      dispatch({
        type: ActionType.AuthErrors,
        payload: { message: error?.message, code: error?.code },
      });
    }
  },
};
