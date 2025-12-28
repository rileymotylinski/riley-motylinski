import type { FC } from "react";

import { data } from "./TempData";
import { PostFeed } from "./PostFeed";

export const Body: FC = () => {
    return (
        <div className="flex justify-center mt-15">
            <div className="basis-3/5 bg-taupe min-h-screen overflow-y-scroll scroll-smooth p-5">
                <PostFeed posts={data}/>
            </div>
        </div>
    )
}