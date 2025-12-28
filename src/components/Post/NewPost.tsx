"use client";

import { PostData } from "@/src/app/api/posts/route";
import { createPost } from "@/src/lib/post/createPost";
import type { FC } from "react";

export const NewPost: FC = () => {

    let extraTestPost: PostData = {
        id: "12",
        content: "This is an extra secret blog post",
        date: new Date().toJSON(),
        title: "no one should see this",
        tags: ["top-secret"]
    };

    return <>
        <button onClick={() => {createPost(extraTestPost)}}>
            This is a new Post button
        </button>
    </>
}