import { PostData } from "@/src/pages/api/posts";
import type { FC } from "react";



export const Post: FC<PostData> = ({ title, date, content }) => {
    return <div>
        <div>{title}</div>
        <div>{new Date(date).getFullYear()}</div>
        <div>{content}</div>
    </div>
}