import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import styled from "styled-components";
import ImageSection from "../components/ImageSection";
import ReviewSection from "../components/ReviewSection";
import ServicesSection from "../components/ServicesSection";
import Title from "../components/Title";
import { NextPageWithLayout } from "../models/common";
import { MainLayout } from "../styles/Layouts";
import Head from "next/head";

const AboutPage: NextPageWithLayout = () => {
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
        <title>About Page</title>
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
        <AboutStyled>
          <Title title={"About Me"} span={"About Me"} />
          <ImageSection />
          <ServicesSection />
          <ReviewSection />
        </AboutStyled>
      </MainLayout>
    </>
  );
};

const AboutStyled = styled.section``;

export default AboutPage;
