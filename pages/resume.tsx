import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import { MainLayout } from "../styles/Layouts";
import Head from "next/head";

function ResumePage() {
  const { status } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") signIn();
  }, [status]);

  if (status !== "authenticated") {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Head>
        <title>Resume Page</title>
        <meta
          name="description"
          content="Welcome to my profile, I am a front end web developer"
        />
        <meta property="og:title" content="My Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my profile, I am a front end web developer"
        />
        <meta property="og:url" content="https://tranduy020900dev.vercel/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Skills />
        <Resume />
      </MainLayout>
    </>
  );
}

export default ResumePage;
