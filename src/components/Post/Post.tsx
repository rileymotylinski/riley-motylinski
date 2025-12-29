'use client'
 
import { useParams } from 'next/navigation'
import { PostData } from "@/src/app/api/posts/route";
import type { FC } from "react";

type Props = {
    post: PostData
}


export const Post: FC<Props> = ({ post }) => {
    const params = useParams<{ id: string }>()

    return <div>
        <div>{post.title}</div>
        <div>{ params.id }</div>
        <div>{new Date(post.date).getFullYear()}</div>
        <div>{post.content}</div>
    </div>
}