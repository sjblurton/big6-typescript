import {
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Dispatch } from "react";
import { auth, provider } from "../config/firebase.config";
import { ActionType, StateActions } from "../state/actions";
import { Status } from "../state/state";

export const AuthService = {
  googleHandler: async (dispatch: Dispatch<StateActions>) => {
    dispatch({ type: ActionType.UpdateStatus, payload: Status.loading });
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      await setPersistence(auth, inMemoryPersistence);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch({
        type: ActionType.UpdateStatus,
        payload: Status.success,
      });
      dispatch({ type: ActionType.UpdateUser, payload: user });
    } catch (error: any) {
      dispatch({
        type: ActionType.UpdateStatus,
        payload: Status.error,
      });
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch({
        type: ActionType.ErrorHandle,
        payload: { code: errorCode, message: errorMessage },
      });
    }
  },
  logout: async (dispatch: Dispatch<StateActions>) => {
    try {
      dispatch({ type: ActionType.UpdateStatus, payload: Status.loading });
      await signOut(auth);
      dispatch({
        type: ActionType.UpdateStatus,
        payload: Status.success,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.UpdateStatus,
        payload: Status.error,
      });
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch({
        type: ActionType.ErrorHandle,
        payload: { code: errorCode, message: errorMessage },
      });
    }
  },
};
