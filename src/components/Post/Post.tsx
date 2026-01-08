'use client'
 
import { PostData } from "@/src/app/api/posts/[guid]/route";
import type { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
    post: PostData
}



export const Post: FC<Props> = ({ post }) => {
    return <div>
        <div>{post.title}</div>
        <div>{new Date(post.date).toString()}</div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
}
