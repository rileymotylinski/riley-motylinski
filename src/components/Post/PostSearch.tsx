"use client";

import { getPosts } from "@/src/lib/get/getPosts";
import { redirect } from "next/navigation";
import { FC, useEffect, useState } from "react";

export const PostSearch: FC = () => {
    const [postName, setPostName]= useState("");
    const [submitted, setSubmitted] = useState(false);
    const [loads, setLoads] = useState(0);
    
    useEffect(() => {
        async function handleSubmit() {
            let result = await getPosts(1, postName);
            if (result.ok) {
                redirect(new URL(`/post/${result.data[0].guid}`, process.env.NEXT_PUBLIC_HOME_URL).toString())
            }
        }
            
        if(loads > 0) {
            handleSubmit()
        }
        setLoads(loads + 1)
        
    },[submitted])
    
    return (
        <form onSubmit={() => setSubmitted(true)}>
            <input
                type="text"
                id="post-name"
                name="post-name"
                className="hover:bg-gray-700 hover:border-b-blue-600/90 hover:border-b"
                value={postName}
                placeholder="Search Posts"
                autoComplete="off"
                onChange={(e) => {setPostName(e.target.value)}}
                />
            <input
            type="submit"
            value="🔎"
            className="w-5/100"
            ></input>
        </form>
        
    )
}