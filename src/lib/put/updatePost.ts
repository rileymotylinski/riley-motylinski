import { PostData } from "@/src/app/api/posts/[guid]/route";

export async function updatePost(post: PostData): Promise<Response> {
    const destination = new URL(`/api/posts/${post.guid}`,process.env.NEXT_PUBLIC_HOME_URL);
    const resp = await fetch(destination, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(post)
    })

    // TODO : verify w/ zod?
    return resp;
}