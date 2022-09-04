import axios from "axios";
export const getPosts = async (limit: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//

export const getPostIds = async (limit: number) => {
  const posts = await getPosts(limit);

  return posts?.map((post: { id: number }) => ({
    params: {
      id: `${post.id}`,
    },
  }));
};

export const getPostById = async (id: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
