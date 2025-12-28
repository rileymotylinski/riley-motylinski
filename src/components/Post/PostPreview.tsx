import type { FC } from "react";
import { Tag } from "../Tag";
import { PostData } from "@/src/app/api/posts/route";

type Props = {
    post: PostData
}

export const PostPreview: FC<Props> = ({ post }) => {
    return <div className="m-4 p-3">
        <div className="hover:underline">
            <p className="text-xl">{post.title}</p>
            <div className="text-md">{post.date}</div>
        </div>
        
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