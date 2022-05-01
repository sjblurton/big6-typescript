import type { AppProps } from "next/app";
import { theme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../state/auth-context";
import { FirestoreProvider } from "../state/firestore-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <FirestoreProvider>
            <Component {...pageProps} />
          </FirestoreProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
