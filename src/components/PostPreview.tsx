import type { FC } from "react";
import type { PostData } from "./Post";
import { Tag } from "./Tag";

type Props = {
    post: PostData
}



export const PostPreview: FC<Props> = ({ post }) => {
    return  <div className="m-4 p-3">
        <p className="text-xl hover:underline">{post.title}</p>
        <div className="text-md">{post.date.toLocaleDateString()}</div>
        <div className="mt-2 mb-2">
            {post.tags.map((tag: string) => (
            <span key={tag}><Tag tag={tag} /></span>
            ))}
        </div>
        
        <p className="max-h-10 overflow-hidden">
            {post.content}
        </p>
          
    </div>
}