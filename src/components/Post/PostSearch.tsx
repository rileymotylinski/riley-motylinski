import { searchPost } from "@/src/lib/search";
import { FC, useEffect, useState } from "react";

export const PostSearch: FC = () => {
    
    return (
            <form action={searchPost}>
                <input
                name="post-name"
                placeholder="Search Posts"
                autoComplete="off"
                />
                <button type="submit">🔎</button>
            </form>
        )

        
    
}