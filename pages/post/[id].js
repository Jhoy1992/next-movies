import Head from "next/head";
import { useRouter } from "next/router";

export default function PostItem() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Post {router.query.id}</h1>
    </>
  );
}
