"use client";

import { FC, useEffect, useState } from "react";
import { AdminPostPreview } from "./AdminPostPreview";
import { PostData } from "@/src/app/api/posts/[guid]/route";
import { getPosts } from "@/src/lib/get/getPosts";
import { deletePost } from "@/src/lib/delete/deletePost";
import { redirect } from 'next/navigation'
 

export const AdminPostView: FC = () => {
    const [posts, setPosts] = useState<PostData[]>([]);
    const [err, setErr] = useState<string>("");

    async function updatePosts() {
        // TODO: update this to get the most recent posts, 10 posts, etc.
        let resp = await getPosts();
        
        if (resp.ok) {
            setPosts(resp.data);
        } else {
            setErr("Unable to fetch posts");
        }
    }

    // deletes a post from the db and removes it from the useState array
    // TODO [optimization] : could locate post in array rather than refetching everything.
    // could be a problem post num is large?
    async function deletePostUpdate(guid: string) {
        // removes post from db
        await deletePost(guid);
        // updates interface
        await updatePosts();

    }

    useEffect(() => {
        // on load, fetch posts
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
                        <AdminPostPreview post={post} deletePost={deletePostUpdate} key={`${index}-${post.guid}`} />
                    ))}
                    <div className="grid place-items-center">
                        <span className="text-3xl bg-background flex items-center justify-center rounded-full h-18 w-18 hover:bg-background/50 transition-colors duration-100">  
                            <button onClick={() => redirect(new URL("/admin/create-post",process.env.NEXT_PUBLIC_HOME_URL!).toString())}>+</button>
                        </span>
                    </div>
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

