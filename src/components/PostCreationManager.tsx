"use client"

import { PostManager } from "@/src/components/PostManager";
import { createPost } from "@/src/lib/post/createPost";
import { redirect } from "next/navigation";
import { FC, useState } from "react";
import type { Editor } from '@tiptap/core'
import { PostData } from "../app/api/posts/[guid]/route";

export const PostCreationManager: FC = () => {
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleClick(title: Editor, content: Editor) {
        const postTitle = title?.getText();
        const postContent = content?.getMarkdown();

        if (!postTitle || !postContent) {
            setErr("missing post content");
            return;
        }

        const post: PostData = {
            guid: crypto.randomUUID(),
            title: postTitle,
            content: postContent,
            tags: ["test-tag"],
            date: new Date().toISOString()
        }

        setLoading(true);
        await createPost(post);
        setLoading(false);
        
        redirect(new URL("/admin/dashboard", process.env.NEXT_PUBLIC_HOME_URL).toString())
    }

    if (loading) {
        return (
            <>
                <div>
                    loading...
                </div>
            </>
        )
    }

    if (err !== "") {
        return (
            <>
                <div>
                    {err}
                </div>
            </>
        )
    }
    
    
    return (
        <>
            <div className="flex justify-center">
                <PostManager handleSubmit={handleClick} initalTitle="This is the initial title" initalContent="This is the inital content" />
            </div>
        </>
    )

}