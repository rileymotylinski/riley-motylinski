import { PostData } from "@/src/app/api/posts/[id]/route";

export async function getPost(id: string): Promise<PostData> {

    const destination = new URL(id, "http://localhost:3000/api/posts/")
    const res = await fetch(destination);

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    // getting json, returning as PostData[] because we validated in /api/posts/route.ts
    const data = await res.json();

    return data;
}
