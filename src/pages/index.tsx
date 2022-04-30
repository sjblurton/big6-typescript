import type { NextPage } from "next";
import { useContext } from "react";
import Seo from "../components/layout/seo/seo";
import { useAlreadyLoggedInRedirect } from "../hooks/use-redirect";

import { AuthService } from "../services/auth";
import { AuthContext } from "../state/auth-context";

const Home: NextPage = () => {
  const { state, dispatch } = useContext(AuthContext);
  useAlreadyLoggedInRedirect();

  if (state.status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Seo title="Home" />

      <main>
        <h1>online</h1>
        {<h2>Status: {state.status}</h2>}
        {<h2>state User: {state.user?.displayName ?? "Logged out"}</h2>}
        {<h2>auth User: {state.user?.displayName ?? "Logged out"}</h2>}
        {
          <h2>
            error: {state.error?.message + " " + state.error?.code ?? "none"}
          </h2>
        }
        <button onClick={() => AuthService.handleGoogle(dispatch)}>
          login with google
        </button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
