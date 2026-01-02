import { PostData } from "@/src/app/api/posts/[id]/route";
import { Result } from "../result";

export async function getPost(guid: string): Promise<Result<PostData>> {
    const destination = new URL(`/api/posts/${guid}`, process.env.NEXT_PUBLIC_HOME_URL)
    const res = await fetch(destination); 
    const json = await res.json()


    // may not return PostData here, handled by 
    // viewing res.ok on client side
    return {ok: res.ok, data: json};
}
