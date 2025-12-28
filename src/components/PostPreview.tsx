import type { FC } from "react";
import type { PostData } from "./Post";

type Props = {
    post: PostData
}

export const PostPreview: FC<Props> = ({ post }) => {
    return  <>
        <div>
            <div>{post.title}</div>
            <div>{post.date.toISOString()}</div>
        </div>
    </>
}