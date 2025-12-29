
import { Post } from "@/src/components/post/Post";
import { getPost } from "@/src/lib/get/getPost";

// dynamic routing in modern nextjs requires nested folders with search params in brackets
export default async function Posts() {
  // TODO: display post in here
  const res = await getPost("1");
  return (
    <>
      <Post post={res}/>
    </>
  );
}