import { PostData } from "@/src/app/api/posts/[id]/route";

export async function createPost(post: PostData): Promise<Response> {
    const destination = new URL("/api/posts",process.env.NEXT_PUBLIC_HOME_URL);
    const resp = await fetch(destination, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
    })

    // TODO : verify w/ zod?
    return resp;
}