import type { AppProps } from "next/app";
import { useAuth } from "../hooks/use-auth";
import { usePersistence } from "../hooks/use-persistence";
import { AuthProvider } from "../state/auth-context";
import { FirestoreProvider } from "../state/firestore-context";

function MyApp({ Component, pageProps }: AppProps) {
  useAuth();
  usePersistence();

  return (
    <>
      <AuthProvider>
        <FirestoreProvider>
          <Component {...pageProps} />
        </FirestoreProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
