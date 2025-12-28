import { PostData } from "../../pages/api/posts";
import { PostDataSchema } from "../../pages/api/posts";
import * as z from "zod";

export async function getPost(): Promise<PostData[]> {
    let headers = new Headers();
    headers.set("Content-Type", "application/json");

    let req = new Request("http://localhost:3000/api/posts", {
        method: "GET",
        headers: headers
    });

    let res = await ((await fetch(req)).json());

    return z.parse(z.array(PostDataSchema), res);
}