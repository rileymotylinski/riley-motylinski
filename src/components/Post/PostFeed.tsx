import type { FC } from "react";
import { PostPreview } from "./PostPreview";
import { getPost } from "@/src/lib/get/getPost";
import { PostData } from "@/src/app/api/posts/[id]/route";

export const PostFeed: FC = async () => {
    let posts: PostData[] = [];
    for (let i = 1; i <= 3; i++) {
        const res = await getPost(i.toString());
        if (res.ok) {
            posts.push(res.data);
        }
        
    }

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