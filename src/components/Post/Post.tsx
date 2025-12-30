'use client'
 
import { PostData } from "@/src/app/api/posts/[id]/route";
import type { FC } from "react";

type Props = {
    post: PostData
}



export const Post: FC<Props> = ({ post }) => {
    return <div>
        <div>{post.title}</div>
        <div>{new Date(post.date).toString()}</div>
        <div>{post.content}</div>
    </div>
}
