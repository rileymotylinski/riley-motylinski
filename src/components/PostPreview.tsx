import type { FC } from "react";
import type { PostData } from "./Post";

type Props = {
    post: PostData
}



export const PostPreview: FC<Props> = ({ post }) => {
    return  <div className="m-4 p-3 hover:border-white hover:border hover:bg-gray-500/50">
        <p className="text-xl">{post.title}</p>
        <div className="text-md">{post.date.toLocaleDateString()}</div>
        <p className="max-h-10 overflow-hidden">{post.content}</p>  
    </div>
}