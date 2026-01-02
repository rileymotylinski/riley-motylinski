"use client";
// re: https://www.codegenes.net/blog/getting-the-current-url-on-the-client-side-in-next-js/
import { Post } from "@/src/components/post/Post";
import { getPost } from "@/src/lib/get/getPost";
import { useEffect, useState } from "react";

import { usePathname } from 'next/navigation';  
import { PostData } from "../../api/posts/[guid]/route";


// dynamic routing in modern nextjs requires nested folders with search params in brackets
export default function Posts() {
  const pathname = usePathname();
  
  const [post, setPost] = useState<PostData>();  
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);  

  const id = pathname.split('/').pop();
 
  useEffect(() => {  
    const fetchPost = async () => {  
      if (!id) return;
      // start loading
      setLoading(true);  
      
      // get data for the id
      const res = await getPost(id);
      // update post
      
      if (!res.ok) {
        setErr("Unable to fetch post");
      } else { 
        setPost(res.data);
      }

      setLoading(false);
      
    };
    fetchPost();  
  // whenever the id in the url changes
  },[id]);

  if (err != "") {
    return (
      <>
        <div>{err}</div>
      </>
    )
  } else if (post !== undefined) {
    return (
      <>
        <Post post={post} />
      </>
    );
    
  } else {
    return (
      <>
        <p>loading...</p>
      </>
    )
  }
  
}