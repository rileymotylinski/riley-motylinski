import type { FC } from "react";
import { PostData } from "../../app/api/posts/[id]/route";

type Props = {
    post: PostData
}

export const AdminPostPreview: FC<Props> = ({ post }) => {
    return(
        <>
            <div className="rounded-xl p-2.5 bg-background">
                <div className="hover:bg-background-light/50">
                    <p>{post.content}</p>
                </div>
            </div>
        </>
    )
}