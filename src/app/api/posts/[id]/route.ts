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

  // db logic goes HERE
  let result = parseInt(id);
  let resp = new Response();
  if (!result || result < 0) {
    return Response.json({ message: "Invalid Post ID"}, {status: 500})
  // checking if id is in posts
  } else if (result > 0 && result <= data.length ) {
    // have to parse as json, zod can't parse strings
    // pretty roundabout right now, but will be useful later when our db returns strings
    let json = JSON.parse(JSON.stringify(data[result-1]));

    // validating data
    let parsedData = PostDataSchema.parse(json)
    // returns as readable json for frontend
    return Response.json(parsedData);

  } else {
    return Response.json({ message: "Post does not exist"}, {status: 500})
  }
  
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
