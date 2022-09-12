import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import { Posts } from "../../models/posts";
import { MainLayout } from "../../styles/Layouts";
import { getPosts } from "../../utils/post";

const Post = styled.div`
  margin-top: 5rem;
  .post-item {
    margin-bottom: 2.5rem;
  }
  .post-desc {
    margin: 2rem 0;
    line-height: 2;
  }
`;

export const getStaticProps = async () => {
  const posts: Posts[] = await getPosts(10);

  return {
    props: {
      posts,
    },
  };
};

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Posts Page</title>
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
        <Title title={"Posts"} span={"posts"} />
        <Post>
          {posts.length > 0 &&
            posts?.map((post) => (
              <div key={post.id} className="post-item">
                <p className="post-title">
                  {post.id} -- {post.title}
                </p>
                <p className="post-desc">{post.body}</p>
                <Link href={`/posts/${post.id}`}>
                  <PrimaryButton title="See More" />
                </Link>
              </div>
            ))}
        </Post>
      </MainLayout>
    </>
  );
};

export default Posts;
