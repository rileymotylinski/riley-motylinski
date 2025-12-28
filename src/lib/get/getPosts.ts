import { PostData } from "@/src/app/api/posts/route";

export async function getPost(): Promise<PostData[]> {
    const res = await fetch("http://localhost:3000/api/posts");

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    // getting json, returning as PostData[] because we validated in /api/posts/route.ts
    const data = await res.json();

    return data;
}
