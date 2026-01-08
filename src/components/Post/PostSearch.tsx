import { getPosts } from "@/src/lib/get/getPosts";
import { searchPost } from "@/src/lib/search";
import { redirect } from "next/navigation";
import { FC, useEffect, useState } from "react";

export const PostSearch: FC = () => {
    const [postName, setPostName] = useState("");
  
    
    
    return (
            <form action={searchPost}>
                <input
                name="query"
                placeholder="Search Posts"
                autoComplete="off"
                />
                <button type="submit">🔎</button>
            </form>
        )

        
    
}