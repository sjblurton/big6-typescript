import type { AppProps } from "next/app";
import { theme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../state/auth-context";
import { FirestoreProvider } from "../state/firestore-context";
import { AuthStateChange } from "src/services/auth-state-change";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthStateChange>
          <AuthProvider>
            <FirestoreProvider>
              <Component {...pageProps} />
            </FirestoreProvider>
          </AuthProvider>
        </AuthStateChange>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
