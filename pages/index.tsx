import { signIn } from "next-auth/react";
import Head from "next/head";
import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import { NextPageWithLayout } from "../models/common";
const Home: NextPageWithLayout = () => {
  return (
    <HomeStyled>
      <Head>
        <title>Home</title>
      </Head>
      <PrimaryButton title="Login Account" onClick={() => signIn()} />
    </HomeStyled>
  );
};
const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export default Home;
