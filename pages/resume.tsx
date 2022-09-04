import Head from "next/head";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import { MainLayout } from "../styles/Layouts";

function ResumePage() {
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
