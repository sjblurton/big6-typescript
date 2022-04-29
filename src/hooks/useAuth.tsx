import { User } from "firebase/auth";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AuthService } from "../services/auth-service";
// import { FirestoreService } from "../service/firestoreService";

interface IAuthContext {
  user: User | undefined;
  error: string;
  loginWithGoogle: () => Promise<
    | {
        user: User;
        error?: undefined;
      }
    | {
        error: string;
        user?: undefined;
      }
  >;
  logout: () => Promise<
    | {
        error: string;
      }
    | undefined
  >;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

const AuthContext = createContext<Partial<IAuthContext>>({});

export default function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user ?? undefined);
    setError(error ?? undefined);
    // user && FirestoreService.createCollection(user);
  };

  const logout = async () => {
    const auth = await AuthService.logout();
    setUser(undefined);
    setError(auth?.error ?? undefined);
  };
  const value = { user, error, loginWithGoogle, logout, setUser };

  return <AuthContext.Provider value={value} {...props} />;
}
