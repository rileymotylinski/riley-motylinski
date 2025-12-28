import type { FC } from "react";
import { PostPreview } from "./PostPreview";
import type { PostData } from "./Post";


type Props = {
    posts: PostData[]
}

export const PostFeed: FC<Props> = ({ posts }) => {
    return <div className="w-1/2">
        {posts.map((post: PostData) => (
            <div key={post.id}>
                <PostPreview post={post} />
            </div>
        ))}
    </div>
    
}