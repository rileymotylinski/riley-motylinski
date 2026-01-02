"use client";
import { PostData } from "@/src/app/api/posts/[guid]/route";
import { createPost } from "@/src/lib/post/createPost";

import type { FC } from "react";

export const NewPost: FC = () => {
    async function makePost() {
        const testPost: PostData = {
            guid: "83e75285-d75f-49e2-a588-193582fa935b",
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