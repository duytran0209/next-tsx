import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/nav/NavBar";
import { Dropdown } from "../components/dropdown/Dropdown";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar />
      <Dropdown />
    </>
  );
};

export default Home;
