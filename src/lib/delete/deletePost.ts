import { Result } from "../result";

export async function deletePost(id: number): Promise<Result<string>> {
    const destination = new URL(`/api/posts/${id}`, process.env.NEXT_PUBLIC_HOME_URL!)
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
