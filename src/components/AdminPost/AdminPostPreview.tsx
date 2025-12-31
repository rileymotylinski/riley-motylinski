import { useState, type FC } from "react";
import { PostData } from "../../app/api/posts/[id]/route";

type Props = {
    post: PostData
}

export const AdminPostPreview: FC<Props> = ({ post }) => {

    const [toolbarOpen, setToolBarOpen] = useState(false);
    return(
        <>
            <div className="bg-background m-5 p-2 grid grid-cols-1 grid-rows-auto rounded-xl" onMouseEnter={() => setToolBarOpen(true)} onMouseLeave={() => setToolBarOpen(false)}>
                <p className=" p-5 bg-background h-50 w-50 overflow-clip">{post.content}</p>
                { toolbarOpen && (<div className="rounded-xl text-center bg-background-light"> This is a toolbar</div>) }
            </div>

        </>
    )
}