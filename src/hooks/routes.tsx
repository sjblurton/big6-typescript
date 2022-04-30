import { useRouter } from "next/router";
import { auth } from "../config/firebase.config";

export function usePublic() {
  const router = useRouter();
  if (auth.currentUser !== null) {
    router.replace("/dashboard");
    return <div>Redirecting to Dashboard...</div>;
  }
}

export const useProtected = () => {
  const router = useRouter();

  if (auth.currentUser === null) {
    router.replace("/");
    return <div>Redirecting to login...</div>;
  }
};
