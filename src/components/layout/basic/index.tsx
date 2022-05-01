import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "src/state/auth-context";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border:0;
    }
    a{
        text-decoration: none;
    }
    body {
        background-color: ${(props) => props.theme.color.bgDark};
        color: ${(props) => props.theme.color.white};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;

export const BasicLayout = ({ children }: { children: any }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user && router.pathname !== "/") router.push("/");
    if (user && router.pathname === "/") router.push("/dashboard");
  }, [user]); //eslint-disable-line

  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
