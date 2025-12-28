"use client";

import Image from "next/image";
import GithubLogo from "./static/github-mark.png";
import LinkedInLogo from "./static/linkedInLogo.png";

import type { FC } from "react";

export const Footer: FC = () => {
    return (
        <div className="flex fixed justify-center h-27 w-full p-5 bg-background border-white border-t">
            <div className="grid grid-cols-2 grid-rows-1 gap-4 place-items-center">
            <div>
                <a href="https://github.com/rileymotylinski">
                    <Image
                    src={GithubLogo}
                    width={30}
                    height={30}
                    alt="Github Profile"
                    className="m-5"
                    />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/riley-motylinski/">
                    <Image
                    src={LinkedInLogo}
                    width={30}
                    height={30}
                    alt="LinkedIn Logo"
                    className="m-5"
                
                    />
                </a>
            </div>
            </div>
        </div>
        
    )
}