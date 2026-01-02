import { Post } from "@/src/entities/Post";
import { AppDataSource } from "@/src/lib/dataSource";
import { NextRequest } from "next/server";
import * as z from "zod"; 

// what we expect to come from the database
export const PostDataSchema = z.object({
    guid: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    date: z.iso.datetime(),
    content: z.string()
});


export type PostData = z.infer<typeof PostDataSchema>;

// basically destructuring an object which has a specific field with params as id: string
// this keeps our code generic as we add more to the incoming request, it remains the same
// as we say "I only care about these members and nothing else"
// we also destructure right here to only get the params field from the full parent element
export async function GET(request: NextRequest, { params }: { params: Promise<{ guid: string }> }) {
  let { guid } = await params;

  const db = await AppDataSource()

  const repo = db.getRepository(Post)
  const post = await repo.find({
    where: {
      guid: guid
    }
  })
    
  // no posts exist with the id
  if (post.length == 0) return Response.json({ message: "Post does not exist"}, {status: 500});
  // post id should be unique. Want to figure out what is happening here.
  if (post.length > 1) throw new Error("MULTIPLE POSTS FOUND")

  // validating data

  // don't know if we really need to parse here, but will anyways
  // returns as readable json for frontend
  return Response.json(post[0], {status: 200});
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ guid: string }> }) {
  let { guid } = await params;

  const db = await AppDataSource()
  const repo = db.getRepository(Post)

  console.log(guid)
  const post = await repo.delete(
    {guid: guid}
  )
  console.log(post.affected)

  if (!post) {
    return Response.json({ message: "no post found"}, {status : 500})
  }

  return Response.json({ message: "post successfully deleted"}, { status: 200 })

}

