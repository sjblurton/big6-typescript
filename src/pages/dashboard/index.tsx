import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import { useFirestore } from "src/hooks/use-firestore";
import Seo from "../../components/layout/seo/seo";
import { AuthContext } from "../../state/auth-context";
import { FirestoreContext } from "../../state/firestore-context";

const Dashboard: NextPage = () => {
  const { user, loading, auth, signOut } = useContext(AuthContext);
  const {
    dispatch,
    error,
    loading: firestoreLoading,
    state,
  } = useContext(FirestoreContext);
  const setUserId = useFirestore();

  useEffect(() => setUserId(user?.uid), [user]); //eslint-disable-line

  if (loading || firestoreLoading) {
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
        <div>first doc: {JSON.stringify(state.data[0])}</div>
        <button onClick={() => signOut(auth)}>logout</button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
