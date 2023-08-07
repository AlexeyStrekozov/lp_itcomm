import { NextPage } from "next";
import { PostDataProps } from "@/types/postdata";
import Head from "next/head";
import Link from "@/components/AppLink";
import React from "react";

const PostPage: NextPage<PostDataProps> = ({ postData }: PostDataProps) => {
  return (
    <main>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1>{postData.title}</h1>

      <p>{postData.body}</p>

      <Link href="/" legacyBehavior passHref>
        <a>Go back to home 2</a>
      </Link>
    </main>
  );
};
export { PostPage };
