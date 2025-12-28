import type { FC } from "react";

export type PostData = {
    title: String,
    date: Date,
    content: String
}

export const Post: FC<PostData> = ({ title, date, content}) => {
    return <div>
        <div>{title}</div>
        <div>{date.toISOString()}</div>
        <div>{content}</div>
    </div>
}