import type { FC } from "react";
import { PostPreview } from "./PostPreview";
import { PostData } from "@/src/app/api/posts/[guid]/route";
import { getPosts } from "@/src/lib/get/getPosts";

export const PostFeed: FC = async () => {
    let posts: PostData[] = (await getPosts(3)).data;
    

    if (posts.length == 0) {
        return (
            <>
                <div>
                    No posts to display right now
                </div>
            </>
        )
    }
    
    return <div className="w-1/2">
        {posts.map((post: PostData, index) => (
            <div key={`${index}-${post.guid}`}>
                <PostPreview post={post} />
            </div>
        ))}
    </div>
}