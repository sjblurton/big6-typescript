import { Auth, User } from "firebase/auth";
import { enableIndexedDbPersistence } from "firebase/firestore";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  auth,
  db,
  onAuthStateChanged,
  googleLogin,
  signOut,
} from "src/config/firebase.config";
import { getErrorMessage } from "src/helpers/error-handler";

export const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
  error: string | undefined;
  auth: Auth;
  setLoading: Dispatch<SetStateAction<boolean>>;
  login: () => Promise<void>;
  signOut(auth: Auth): Promise<void>;
}>({
  user: null,
  loading: false,
  error: undefined,
  auth: auth,
  setLoading: () => {},
  login: async () => {},
  signOut,
});

export const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user));
    return unsubscribe;
  }, []); //eslint-disable-line

  useEffect(() => {
    try {
      enableIndexedDbPersistence(db);
      console.log("Persistence on");
    } catch (err: unknown) {
      console.error(getErrorMessage(err));
    }
  }, []);

  const login = async () => {
    setLoading(true);
    try {
      const { user } = await googleLogin();
      console.log("from use-login: ", user);
      setLoading(false);
    } catch (firebaseError: unknown) {
      setError(getErrorMessage(firebaseError));
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, auth, setLoading, login, signOut }}
      {...props}
    />
  );
};
