import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import PrimaryButton from "../../components/PrimaryButton";
import { MainLayout } from "../../styles/Layouts";
import { getPostById, getPostIds } from "../../utils/post";

interface PostProps {
  post: {
    title: string;
    body: string;
  };
}
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - My Clothing Store</title>
      </Head>
      <MainLayout>
        <div>
          <PostDetails>
            <p className="post-title">{post.title}</p>
            <p className="post-desc">{post.body}</p>
            <Link href="/posts">
              <PrimaryButton title="Back" />
            </Link>
          </PostDetails>
        </div>
      </MainLayout>
    </>
  );
};

const PostDetails = styled.div`
  .post-item {
    margin-bottom: 2.5rem;
  }
  .post-desc {
    margin: 2rem 0;
    line-height: 2;
  }
`;
export const getStaticPaths = async () => {
  const paths = await getPostIds(10);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
    revalidate: 5,
  };
};

export default Post;
