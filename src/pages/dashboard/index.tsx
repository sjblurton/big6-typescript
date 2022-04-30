import type { NextPage } from "next";
import { useContext } from "react";
import Seo from "../../components/layout/seo/seo";
import { auth, signOut } from "../../config/firebase.config";
import { useAuth } from "../../hooks/use-auth";
import { useLoginRedirect } from "../../hooks/use-redirect";
import { AuthContext } from "../../state/auth-context";
import { FirestoreContext } from "../../state/firestore-context";

const Dashboard: NextPage = () => {
  const firebaseAuth = useContext(AuthContext);
  const firestore = useContext(FirestoreContext);
  useAuth();
  useLoginRedirect();

  return (
    <div>
      <Seo title="Dashboard" />

      <main>
        <h1>online</h1>
        {<h2>Status: {firebaseAuth.state.status}</h2>}
        {
          <h2>
            state User: {firebaseAuth.state.user?.displayName ?? "Logged out"}
          </h2>
        }
        {
          <h2>
            auth User: {firebaseAuth.state.user?.displayName ?? "Logged out"}
          </h2>
        }
        {
          <h2>
            error:{" "}
            {firebaseAuth.state.error?.message +
              " " +
              firebaseAuth.state.error?.code ?? "none"}
          </h2>
        }
        <div>first doc: {JSON.stringify(firestore.state.data[0])}</div>
        <button onClick={() => signOut(auth)}>logout</button>
      </main>
      <footer></footer>
    </div>
  );
};

export default Dashboard;
