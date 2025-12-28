import type { FC } from "react";
import { PostPreview } from "./PostPreview";
import { getPost } from "@/src/lib/get/getPosts";

export const PostFeed: FC = async () => {
    const res = await getPost();
    
    return <div className="w-1/2">
        {res.map((post) => (
            <div key={post.id}>
                <PostPreview post={post} />
            </div>
        ))}
    </div>

    

    
    
}