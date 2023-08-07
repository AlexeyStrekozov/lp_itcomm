import { PostData } from "../../types/postdata";
import fetch from "isomorphic-unfetch";

async function GetPost(id: string): Promise<PostData> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const postData: PostData = (await response.json()) as PostData;
  return postData;
}

async function GetPosts(): Promise<PostData[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=1",
  );
  const postList: PostData[] = (await response.json()) as PostData[];
  return postList;
}
export const PostsApi = {
  getPosts: GetPosts,
  getPost: GetPost,
};
