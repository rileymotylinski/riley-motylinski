"use client";

import { FC, useState } from "react";

export const PostSearch: FC = () => {
    const [postName, setPostName]= useState("");
    
    return (
      
        <form>
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