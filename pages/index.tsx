import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/nav/NavBar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
    </>
  );
};

export default Home;
