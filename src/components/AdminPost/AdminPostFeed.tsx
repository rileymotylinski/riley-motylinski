"use client";

import { FC, useEffect, useState } from "react";
import { AdminPostPreview } from "./AdminPostPreview";
import { PostData } from "@/src/app/api/posts/[id]/route";
import { getPost } from "@/src/lib/get/getPost";

export const AdminPostFeed: FC = () => {
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

