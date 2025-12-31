import { Result } from "../result";

export async function deletePost(id: string): Promise<Result<string>> {
    const destination = new URL(id, "http://localhost:3000/api/posts/")
    const resp = await fetch(destination, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })

    // TODO : verify w/ zod?
    if (resp.ok) {
        return {ok: true, data: await resp.text()};
    } else {
        return {ok: false, data: "unable to delete post"}
    }
    
    
}
