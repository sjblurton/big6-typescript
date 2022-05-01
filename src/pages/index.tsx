import type { NextPage } from "next";
import { useContext } from "react";
import Seo from "../components/layout/seo/seo";
import { AuthContext } from "../state/auth-context";

const Home: NextPage = () => {
  const { user, loading, error, login } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading..</h1>;
  }
  if (error !== undefined) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <Seo title="Home" />

      <main>
        <h1>online</h1>
        {<h2>state User: {user?.displayName ?? "Logged out"}</h2>}
        <button onClick={() => login()}>login with google</button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
