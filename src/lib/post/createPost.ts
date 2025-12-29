import { PostData } from "@/src/app/api/posts/[id]/route";

export async function createPost(post: PostData): Promise<Response> {

    const destination = new URL("http://localhost:3000/api/posts");
    const resp = await fetch(destination, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
    })

    // TODO : verify w/ zod?
    return resp;
}