import type { NextPage } from "next";
import { useContext } from "react";
import Seo from "../../components/layout/seo/seo";
import { auth, signOut } from "../../config/firebase.config";
import { useProtected } from "../../hooks/routes";
import { useAuth } from "../../hooks/use-auth";
import { AuthContext } from "../../state/auth-context";

const Dashboard: NextPage = () => {
  const { state, dispatch } = useContext(AuthContext);
  useAuth();
  useProtected();

  if (state.status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Seo title="Dashboard" />

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
        <button onClick={() => signOut(auth)}>logout</button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
