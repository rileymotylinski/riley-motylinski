"use client";
import { PostData } from "@/src/app/api/posts/[id]/route";
import { createPost } from "@/src/lib/post/createPost";

import type { FC } from "react";

export const NewPost: FC = () => {
    async function makePost() {
        const testPost: PostData = {
            id: 5,
            title: "my first db post",
            content: "my first post to be commited to my database",
            tags: ["test-tag"],
            date: new Date().toISOString()
        }

        createPost(testPost)
    }

    return <>
        <button onClick={() => makePost()}>
            This is a new Post button
        </button>
    </>
}