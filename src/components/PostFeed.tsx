import type { FC } from "react";
import { PostPreview } from "./PostPreview";
import type { PostData } from "./Post";


type Props = {
    posts: PostData[]
}
export const PostFeed: FC<Props> = ({ posts }) => {
    return <>
        {posts.map((post: PostData) => {
            <PostPreview post={post} />
        })}
    </> 
}