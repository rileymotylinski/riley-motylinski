import { useState, type FC } from "react";
import { PostData } from "../../app/api/posts/[id]/route";

type Props = {
    post: PostData
}

export const AdminPostPreview: FC<Props> = ({ post }) => {

    const [toolbarOpen, setToolBarOpen] = useState(false);
    return(
        <>
            <div className="group bg-background m-5 p-2 grid grid-cols-1 grid-rows-auto rounded-xl" onMouseEnter={() => setToolBarOpen(true)} onMouseLeave={() => setToolBarOpen(false)}>
                <p className=" p-5 bg-background h-50 w-50 overflow-clip group-hover:blur-sm transition-all duration-200">{post.content}</p>
                <div className="rounded-xl text-center bg-background-light duration-200 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 transition-all origin-top"> This is a toolbar</div>
            </div>

        </>
    )
}