import Head from "next/head";
import Link from "next/link";
import PrimaryButton from "../../components/PrimaryButton";
import { MainLayout } from "../../styles/Layouts";
import { getPosts } from "../../utils/post";
import Title from "../../components/Title";
import styled from "styled-components";

interface Props {
  posts: any;
}

const Blog = styled.div`
  margin-top: 5rem;
  .post-item {
    margin-bottom: 2.5rem;
  }
  .post-desc {
    margin: 2rem 0;
    line-height: 2;
  }
`;
const Posts: React.FC<Props> = ({ posts }) => {
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
        <Blog>
          {posts?.map((post: any) => (
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
        </Blog>
      </MainLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts(10);

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
