import type { FC } from "react";
import { PostPreview } from "./PostPreview";
import { PostData } from "@/src/pages/api/posts";
import { getPost } from "@/src/lib/get/getPosts";



export const PostFeed: FC = async () => {
    let posts: PostData[] = await getPost();
    return <div className="w-1/2">
        {posts.map((post: PostData) => (
            <div key={post.id}>
                <PostPreview post={post} />
            </div>
        ))}
    </div>
    
}