import Head from "next/head";
// import MainLayout from "../components/layout/MainLayout";
import { NextPageWithLayout } from "../models/common";
import { useSession, signIn } from "next-auth/react";
import SignedInHeader from "../components/auth/SignedInHeader";

const Home: NextPageWithLayout = () => {
  const { data: session, status } = useSession();
  const renderHeader = () => {
    if (session) {
      return <SignedInHeader session={session} />;
    }
  };
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <button onClick={() => signIn()}>A</button>
      {renderHeader()}
    </>
  );
};

// Home.Layout = MainLayout;
export default Home;
