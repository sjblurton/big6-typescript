import type { AppProps } from "next/app";
import { AuthProvider } from "../state/auth-context";
import { FirestoreProvider } from "../state/firestore-context";

function MyApp({ Component, pageProps }: AppProps) {
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
