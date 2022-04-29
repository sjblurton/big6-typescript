import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return { user: result.user };
    } catch (e: any) {
      console.log(e);
      return { error: e.message as string };
    }
  },
  logout: async () => {
    try {
      await signOut(auth);
    } catch (e: any) {
      console.log(e);

      return { error: e.message as string };
    }
  },
};
