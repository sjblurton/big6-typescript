import type { NextPage } from "next";
import Seo from "../components/layout/seo/seo";

const Home: NextPage = () => {
  return (
    <div>
      <Seo title="Offline" />
      <main>This page is not available offline</main>
      <footer></footer>
    </div>
  );
};

export default Home;
