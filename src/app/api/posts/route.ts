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
    const db = await AppDataSource();
    const repo = db.getRepository(Post);
    
    // SELECT * FROM posts
    return Response.json({"posts" : JSON.stringify(await repo.find())}, {status: 200})
}