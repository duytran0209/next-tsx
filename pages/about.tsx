import { GetStaticPropsContext, GetStaticProps } from "next";
import React, { memo, useState } from "react";

export interface AboutStates {}

export interface AboutProps {
  children?: string;
  posts: any[];
}

const About: React.FC<AboutProps> = ({ children, posts }) => {
  return <div>About Page</div>;
};

export const getStaticProps: GetStaticProps<AboutProps> = async (
  context: GetStaticPropsContext
) => {
  return { props: { posts: [{ title: "hello" }] } };
};

export default memo(About);
