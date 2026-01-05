import { useState, type FC } from "react";
import { PostData } from "../../app/api/posts/[guid]/route";
import { redirect } from "next/navigation";
import ReactMarkdown from "react-markdown"



type Props = {
    post: PostData,
    deletePost: (guid: string) => void, // possible to confuse with deletePost in /lib/delete
}

export const AdminPostPreview: FC<Props> = ({ post, deletePost }) => {

    const [toolbarOpen, setToolBarOpen] = useState(false);


    return(
        <>
            <span>
                <div className="group bg-background m-5 p-2 grid grid-cols-1 grid-rows-auto h-50 rounded-xl relative" onMouseEnter={() => setToolBarOpen(true)} onMouseLeave={() => setToolBarOpen(false)}>
                    <div className="group-hover:blur-xs"><ReactMarkdown>{post.content}</ReactMarkdown></div>
                    <div className="rounded-xl w-1/2 text-center bg-background-light duration-200 opacity-0 group-hover:opacity-100 transition-all flex pl-0.5 pr-0.5 place-self-center">
                        
                        <button className="w-1/2 text-center hover:bg-blue-700 rounded-xl" onClick={() => redirect(new URL(`/admin/edit-post/${post.guid}`, process.env.NEXT_PUBLIC_HOME_URL).toString())}>edit</button>
                        <button className="w-1/2 text-center hover:bg-blue-700 rounded-xl" onClick={async () => deletePost(post.guid)}>delete</button>
                
                    </div>
                </div>
            </span>
        </>
    )
}