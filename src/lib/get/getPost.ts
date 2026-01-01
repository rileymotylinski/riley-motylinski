import { PostData } from "@/src/app/api/posts/[id]/route";
import { Result } from "../result";

export async function getPost(id: string): Promise<Result<PostData>> {
    const destination = new URL(`/api/posts/${id}`, process.env.NEXT_PUBLIC_HOME_URL)
    const res = await fetch(destination);

    // may not return PostData here, handled by 
    // viewing res.ok on client side
    return {ok: res.ok, data: await res.json()};
}
