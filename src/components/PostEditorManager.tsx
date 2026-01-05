"use client"

import { Editor } from "@tiptap/react";
import { FC, useState } from "react";
import { updatePost } from "@/src/lib/put/updatePost";
import { redirect } from "next/navigation";
import { PostManager } from "@/src/components/PostManager";
import { PostData } from "../app/api/posts/[guid]/route";

type Props = {
    initialPost: PostData
}

export const PostEditorManger: FC<Props> = ({ initialPost }) => {
    
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleClick(title: Editor, content: Editor) {
        const postTitle = title?.getText();
        const postContent = content?.getMarkdown();

        if (!postTitle || !postContent ) {
            setErr("missing post content");
            return;
        }

        const post: PostData = {
            guid: initialPost.guid,
            title: postTitle,
            content: postContent,
            tags: initialPost.tags, // TODO [feat] : add tag system
            date: new Date().toISOString() // TODO [feat] : add updatedOn field
        }

        setLoading(true);
        await updatePost(post);
        setLoading(false);
        
        redirect(new URL("/admin/dashboard", process.env.NEXT_PUBLIC_HOME_URL).toString())
    }

    if (loading) {
        return (
            <>
                <div>
                    loading...
                </div>
            </>
        )
    }

    if (err !== "") {
        return (
            <>
                <div>
                    {err}
                </div>
            </>
        )
    }
    
    
    return (
        <>
            <div className="flex justify-center">
                <PostManager handleSubmit={handleClick} initalTitle={initialPost.title} initalContent={initialPost.content} />
            </div>
        </>
    )
    
     
}