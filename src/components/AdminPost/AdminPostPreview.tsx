import { useState, type FC } from "react";
import { PostData } from "../../app/api/posts/[guid]/route";
import { redirect } from "next/navigation";



type Props = {
    post: PostData,
    deletePost: (guid: string) => void, // possible to confuse with deletePost in /lib/delete
}

export const AdminPostPreview: FC<Props> = ({ post, deletePost }) => {

    const [toolbarOpen, setToolBarOpen] = useState(false);
    return(
        <>
            <span>
                <div className="group bg-background m-5 p-2 grid grid-cols-1 grid-rows-auto rounded-xl" onMouseEnter={() => setToolBarOpen(true)} onMouseLeave={() => setToolBarOpen(false)}>
                    <p className=" p-5 bg-background h-50 w-50 overflow-clip group-hover:blur-sm transition-all duration-200">{post.content}</p>
                    <div className="rounded-xl text-center bg-background-light duration-200 opacity-0 group-hover:opacity-100 group-hover:-translate-y-40 transition-all flex pl-0.5 pr-0.5">
                        
                        <button className="w-1/2 text-center hover:bg-blue-700 rounded-xl" onClick={() => redirect(new URL(`/admin/edit-post/${post.guid}`, process.env.NEXT_PUBLIC_HOME_URL).toString())}>edit</button>
                        <button className="w-1/2 text-center hover:bg-blue-700 rounded-xl" onClick={async () => deletePost(post.guid)}>delete</button>
                
                    </div>
                </div>
            </span>
        </>
    )
}