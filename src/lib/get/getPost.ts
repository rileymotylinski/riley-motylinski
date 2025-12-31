import { PostData } from "@/src/app/api/posts/[id]/route";
import { Result } from "../result";



export async function getPost(id: string): Promise<Result<PostData>> {
    const destination = new URL(`/api/posts/${id}`, process.env.NEXT_PUBLIC_HOME_URL)
    const res = await fetch(destination);

    // getting json, returning as PostData because we validated in /api/posts/route.ts
    if (res.ok) {
        return {ok: true, data: await res.json()};
    } else {
        return {ok: false, data: await res.json()};
    }
    
}
