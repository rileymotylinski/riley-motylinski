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
    { id: "2", title: "This is test #2",tags: ["books", "review"], date: new Date().toJSON(), content: lorem },
    { id: "3", title: "Final Test", tags: ["movie", "review"], date: new Date().toJSON(), content: lorem }
]

export async function GET(request: NextRequest) {
  // have to parse as json, zod can't parse strings
  // pretty roundabout right now, but will be useful later wehn our db returns strings
  let json = JSON.parse(JSON.stringify(data));

  // validating data
  let parsedData = z.parse(z.array(PostDataSchema), json)
  // returns as readable json for frontend
  return Response.json(parsedData);
}

export async function POST(request: NextRequest) {
  let response = await request.json()
  // validating data
  let result = z.parse(PostDataSchema,response);
  // will insert into db here
  // probably some error handling at some point


  return new Response("Successfully made post", {
    status: 200
  })
  // should generate ID here
}