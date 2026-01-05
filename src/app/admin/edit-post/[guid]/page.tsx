import { auth } from "@/auth";
import { PostEditorManger } from "@/src/components/PostEditorManager";
import { getPost } from "@/src/lib/get/getPost";



export default async function EditPost({ params }: { params: Promise<{ guid: string }> }) {
    const session = await auth();
    if (!session?.user) return null;

    let { guid } =  await params;

    const initialPost = await getPost(guid);

    if (!initialPost.ok) {
        return(
            <>
                <div>
                    failed to fetch post
                </div>
            </>
        )
    }
    return (
        <>
            <PostEditorManger initialPost={initialPost.data} />
        </>
    )
    
}   


