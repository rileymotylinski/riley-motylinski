import { Post } from "@/src/entities/Post";
import { AppDataSource } from "@/src/lib/dataSource";
import { NextRequest } from "next/server";
import * as z from "zod"; 

export const PostDataSchema = z.object({
    id: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    date: z.iso.datetime(),
    content: z.string()
});


export type PostData = z.infer<typeof PostDataSchema>;

let lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeo Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";

export const data: PostData[] = [
    { id: "1", title: "This is a test", tags: ["programming"], date: new Date().toJSON(), content: lorem },
    { id: "2", title: "This is test #2",tags: ["books", "motion"], date: new Date().toJSON(), content: "lorem" },
    { id: "3", title: "Final Test", tags: ["movie", "review"], date: new Date().toJSON(), content: lorem }
]

// basically destructuring an object which has a specific field with params as id: string
// this keeps our code generic as we add more to the incoming request, it remains the same
// as we say "I only care about these members and nothing else"
// we also destructure right here to only get the params field from the full parent element
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  let { id } = await params;

  // valid post id
  try {
    parseInt(id)
  } catch {
    return Response.json({ message: "Invalid Post ID"}, {status: 500})
  }

  const db = await AppDataSource()
  const repo = db.getRepository(Post)
  const post = await repo.find({
    where: {
      id: parseInt(id)
    }
  })
    
  // no posts exist with the id
  if (post.length == 0) return Response.json({ message: "Post does not exist"}, {status: 500});
  // post id should be unique. Want to figure out what is happening here.
  if (post.length > 1) throw new Error("MULTIPLE POSTS FOUND")

  // validating data
  console.log()
  // don't know if we really need to parse here, but will anyways
  let parsedData = PostDataSchema.parse(post[0])
  // returns as readable json for frontend
  return Response.json(parsedData, {status: 200});
}

export async function POST(request: NextRequest) {
  let response = await request.json()
  // validating data
  let result = PostDataSchema.parse(response);
  // will insert into db here
  // probably some error handling at some point
  // should generate ID here?

  return new Response("Successfully made post", {
    status: 200
  })
  
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  let { id } = await params
  return Response.json({message: `deleted post ${id}`}, {status: 200})
}