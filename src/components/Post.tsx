import type { FC } from "react";

export type PostData = {
    id: string,
    title: string,
    tags: string[],
    date: Date,
    content: string
}

export const Post: FC<PostData> = ({ title, date, content}) => {
    return <div>
        <div>{title}</div>
        <div>{date.toISOString()}</div>
        <div>{content}</div>
    </div>
}