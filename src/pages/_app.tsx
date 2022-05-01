import type { AppProps } from "next/app";
import { BasicLayout } from "src/components/layout/basic";
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
            <BasicLayout>
              <Component {...pageProps} />
            </BasicLayout>
          </FirestoreProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
