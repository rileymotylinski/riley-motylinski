import { NextRequest } from "next/server";
import { PostDataSchema } from "./[id]/route";
import { AppDataSource } from "@/src/lib/dataSource";
import { Post } from "@/src/entities/Post";

export async function POST(request: NextRequest) {
    // retrieving data from request
    let response = await request.json()

    // validating data
    let result = PostDataSchema.parse(response);

    // connecting to db
    const db = await AppDataSource();
    const repo = db.getRepository(Post);

    repo.insert(result);

    return Response.json({message: "succesfully made post"}, {status: 200})
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const db = await AppDataSource();
    const repo = db.getRepository(Post);
    const posts = await repo.find();
    // essentially checking if it exists as an integer; if it doesn't then simply return the whole array
    const numPosts = parseInt(searchParams.get("num") ?? "NaN") ?? posts.length;
    

    // SELECT * FROM posts
    return Response.json({"posts" : JSON.stringify(posts.slice(0,numPosts))}, {status: 200})
}