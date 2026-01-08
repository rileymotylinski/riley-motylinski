import { PostData } from "@/src/app/api/posts/[guid]/route";
import { Result } from "../result";

export async function getPosts(numPosts=-1, postName=""): Promise<Result<PostData[]>> {
    const destination = new URL("/api/posts", process.env.NEXT_PUBLIC_HOME_URL);
    // anything less than 0 will be viewed as getting all posts
    if (numPosts > 0) {
        destination.searchParams.set("num", numPosts.toString())
    }
    
 
    if(postName != "") {
        // TODO [fix]: clean search name
        destination.searchParams.set("post-name", postName)
        console.log("set post name")
    }


    const res = await fetch(destination);
    const json = await res.json();
    if (res.ok) {
        let result = JSON.parse(json?.posts)
    
        // may not return PostData here, handled by 
        // viewing res.ok on client side
        return {ok: res.ok, data: result };
    } else {
        return {ok: res.ok, data: null}
    }
    
}


