"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";
import { PostSearch } from "./post/PostSearch";

export const Toolbar: FC = () => {
    const [hidden, setHidden] = useState(false);

    // use effect means it triggers based on changes in dependency array; an empty array implies it only triggers on render
    useEffect(() => {
        const threshold = 200; // pixels scrolled before hiding

        // helper function for checking if it's scrolled all the way
        const onScroll = () => setHidden(window.scrollY > threshold);
        // repeatedly checks to see if we are past the threshold (see above function)
        // only added once during render
        window.addEventListener("scroll", onScroll);
        // prevents re-reading the same values
        return () => window.removeEventListener("scroll", onScroll);
    // empty dependency array means it runs once at render time
    }, []);

    return (
        <div className="flex justify-center mb-17">
            <div
                // either  move it off screen by its height or keep it the same
                className={
                    "fixed top-0 w-full z-0 flex bg-background m-2 mt-0 p-2 border-b border-white transform transition-transform duration-300 " +
                    (hidden ? "-translate-y-full" : "translate-y-0")
                }
            >
                <div className="w-1/2">
                    <div><a href="http://localhost:3000">Riley Motylinski's Website</a></div>
                    <PostSearch />
                </div>

                <div className="w-1/2 flex flex-col items-end">
                    <div>Recent post feed</div>
                    <div>login</div>
                </div>
            </div>
        </div>
    );
};