import type { FC } from "react";
import { Tag } from "../Tag";
import { PostData } from "@/src/app/api/posts/[guid]/route";
import ReactMarkdown from "react-markdown";

type Props = {
    post: PostData
}

export const PostPreview: FC<Props> = ({ post }) => {
    return <>
        <div className="m-4 p-3">
            <div className="hover:underline">
                <a href={new URL(`/post/${post.guid}`, process.env.NEXT_PUBLIC_HOME_URL).toString()}>
                    <p className="text-xl">{post.title}</p>
                    <div className="text-md">{post.date}</div>
                </a>
            </div>
            
            <div className="mt-2 mb-2">
                {post.tags.map((tag: string, index: number) => (
                    <span key={`${index}-${tag}`}><Tag tag={tag} /></span>
                ))}
            </div>
            
            <div className="max-h-10 overflow-hidden">
                <ReactMarkdown>
                    {post.content}
                </ReactMarkdown>
            </div>
            
        </div>
    </>
}