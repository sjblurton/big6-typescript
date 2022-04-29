import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  AuthErrorCodes,
} from "firebase/auth";
import { auth } from "../../config/firebase.config";

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return { user: result.user };
    } catch (error: any) {
      return { error };
    }
  },
  logout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      return { error: typeof AuthErrorCodes };
    }
  },
};
