import type { NextPage } from "next";
import { useContext } from "react";
import Seo from "../../components/layout/seo/seo";
import { AuthContext } from "../../state/auth-context";
import { FirestoreContext } from "../../state/firestore-context";

const Dashboard: NextPage = () => {
  const { user, error, loading, auth, signOut } = useContext(AuthContext);
  const firestore = useContext(FirestoreContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <Seo title="Dashboard" />

      <main>
        <h1>online</h1>
        <h2>state User: {user?.displayName ?? "Logged out"}</h2>
        <div>first doc: {JSON.stringify(firestore.state.data[0])}</div>
        <button onClick={() => signOut(auth)}>logout</button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
