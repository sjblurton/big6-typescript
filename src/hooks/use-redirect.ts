import { useRouter } from "next/router";
import { auth } from "../config/firebase.config";

export const useLoginRedirect = () => {
  const router = useRouter();
  if (auth.currentUser === null) {
    router.replace("/");
  }
};

export const useAlreadyLoggedInRedirect = () => {
  const router = useRouter();
  if (auth.currentUser !== null) {
    router.replace("/dashboard");
  }
};
