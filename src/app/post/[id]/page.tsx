import { Post } from "@/src/components/post/Post";
import { PostData } from "../../api/posts/route";


// dynamic routing in modern nextjs requires nested folders with search params in brackets
export default function Posts() {
  const testPost: PostData = {
    id: "5",
    title: "My other super secret post",
    content: "Should anyone be seeing this?",
    tags: ["super-duper-secret"],
    date: new Date().toJSON(),
  }
  return (
    <>
      <Post post={testPost}/>
      
    </>
  );
}