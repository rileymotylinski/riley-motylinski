"use client";

import { FC, useEffect, useState } from "react";
import { AdminPostPreview } from "./AdminPostPreview";
import { PostData } from "@/src/app/api/posts/[id]/route";
import { getPost } from "@/src/lib/get/getPost";

export const AdminPostView: FC = () => {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        async function updatePost() {
            // TODO: update this to get the most recent posts, 10 posts, etc.
            let resp = await getPost("1");
            if (resp.ok) {
                setPosts(posts.concat([resp.data]))
            } else {
                setErr("Unable to fetch post");
            }
        }
        updatePost();
        
    },[]);

    if (err !== "") {
        return (
        <>
            <div>
                {err}
            </div>
        </>
        )
    } else if (posts.length > 0) {
        return (
            <>
                
                {posts.map((post: PostData, index) => (
                    <AdminPostPreview post={post} key={`${index}-${post.id}`} />
                ))}
                <span className="text-3xl bg-background flex items-center justify-center rounded-full h-18 w-18 hover:bg-background/50 transition-colors duration-100">
                    <span className="flex items-center justify-center">
                        +
                    </span>
                </span>
    
            
            </>
        )
    } else {
        return (
            <div>
                loading...
            </div>
        )
    
    }
}

