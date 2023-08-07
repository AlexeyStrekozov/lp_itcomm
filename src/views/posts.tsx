import { NextPage } from "next";
import { PostData, PostDataListProps } from "@/types/postdata";
import Head from "next/head";
import Post from "@/components/post";

const PostsListPage: NextPage<PostDataListProps> = ({
  postDataList,
}: PostDataListProps) => {
  return (
    <main className={"p-4"}>
      <Head>
        <title>Home page</title>
      </Head>

      <h1 className={"text-h1"}>List of posts</h1>

      <section className={"mt-4 grid grid-cols-2 gap-10"}>
        {postDataList.map((post: PostData) => (
          <Post {...post} key={post.id} />
        ))}
      </section>
    </main>
  );
};

export { PostsListPage };
