import { NextRequest } from "next/server";
import { PostDataSchema } from "./[guid]/route";
import { AppDataSource } from "@/src/lib/dataSource";
import { Post } from "@/src/entities/Post";
import { NextAuthRequest } from "next-auth";
import { auth } from "@/auth";




export const POST = auth(async function POST(request: NextAuthRequest) {
    // checking auth status
    if (!request.auth) return Response.json({message: "Unauthorized"}, {status: 401})

    // retrieving data from request
    let response = await request.json()

    // validating data
    let result = PostDataSchema.parse(response);

    // connecting to db
    const db = await AppDataSource();
    const repo = db.getRepository(Post);

    // adding to db
    repo.insert(result);

    return Response.json({message: "succesfully made post"}, {status: 200})
})

export async function GET(request: NextRequest) {
    // endpoint is unsecured; rate limited by middleware

    // retrieve number of posts to get
    const searchParams = request.nextUrl.searchParams;

    // connect to db
    const db = await AppDataSource();
    const repo = db.getRepository(Post);

    // retrieves all posts in Post entity
    const posts = await repo.find();

    // essentially checking if it exists as an integer; if it doesn't then simply return the whole array
    let numPosts = posts.length;
    const result = parseInt(searchParams.get("num") ?? "NaN")
    
    // if result exists as integer
    if(result) {
        numPosts = result;
    }
  
    // SELECT * FROM posts
    return Response.json({"posts" : JSON.stringify(posts.slice(0,numPosts))}, {status: 200})
}