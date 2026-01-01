"use client";

import { FC, useEffect, useState } from "react";
import { AdminPostPreview } from "./AdminPostPreview";
import { PostData } from "@/src/app/api/posts/[id]/route";
import { getPosts } from "@/src/lib/get/getPosts";

export const AdminPostView: FC = () => {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [err, setErr] = useState<string>("");

    useEffect(() => {
        async function updatePosts() {
            // TODO: update this to get the most recent posts, 10 posts, etc.
            let resp = await getPosts();

            if (resp.ok) {
                setPosts(resp.data);
            } else {
                setErr("Unable to fetch posts");
            }
        }
        updatePosts();
        
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
                <div className="grid grid-cols-5">
                    {posts.map((post: PostData, index) => (
                        <AdminPostPreview post={post} key={`${index}-${post.id}`} />
                    ))}
                    <span className="text-3xl bg-background flex items-center justify-center rounded-full h-18 w-18 hover:bg-background/50 transition-colors duration-100">
                        <span className="flex items-center justify-center">
                            +
                        </span>
                    </span>
                </div>
                
    
            
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

