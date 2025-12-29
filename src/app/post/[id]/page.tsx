"use client";

import { Post } from "@/src/components/post/Post";
import { getPost } from "@/src/lib/get/getPost";
import { useEffect, useState } from "react";

import { usePathname } from 'next/navigation';  
import { PostData } from "../../api/posts/[id]/route";

// dynamic routing in modern nextjs requires nested folders with search params in brackets
export default function Posts() {
  const pathname = usePathname();
  
  const [post, setPost] = useState<PostData>();  
  const [loading, setLoading] = useState(true);  

  const id = pathname.split('/').pop();
 
  useEffect(() => {  
    const fetchPost = async () => {  
      setLoading(true);  
      try {
        if (id) {
          const data = await getPost(id.toString());  
          setPost(data);  
        }  
      } catch (error) {  
        console.error('Failed to fetch post:', error);  
      } finally {  
        setLoading(false);  
      }  
      
    };
    fetchPost();  
  },[id]); 

  if (!loading && post != undefined) {
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