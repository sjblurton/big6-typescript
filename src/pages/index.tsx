import type { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { googleLogin } from "../config/firebase.config";
import { useAuth } from "../hooks/use-auth";
import { ActionType } from "../state/auth-actions";
import { AuthContext } from "../state/auth-context";

const Home: NextPage = () => {
  const { state, dispatch } = useContext(AuthContext);
  useAuth();

  const handleClick = async () => {
    dispatch({ type: ActionType.UpdateStatus, payload: "loading" });
    try {
      await googleLogin();
      dispatch({ type: ActionType.UpdateStatus, payload: "success" });
    } catch (error) {
      dispatch({ type: ActionType.UpdateStatus, payload: "error" });
      alert("error");
    }
  };

  if (state.status === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <Head>
        <title>App online</title>
        {/* <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

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
        <button onClick={handleClick}>login with google</button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
