import { PostData } from "@/src/app/api/posts/route";

export async function getPost(): Promise<PostData[]> {
    let headers = new Headers();
    headers.set("Content-Type", "application/json");

    let req = new Request("http://localhost:3000/api/posts", {
        method: "GET",
        headers: headers
    });
    
    return (await fetch(req)).json()
}