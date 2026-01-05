
import { auth } from "@/auth";
import { PostCreationManager } from "@/src/components/PostCreationManager";

export default async function CreatePost() {

    const session = await auth();
    if (!session?.user) return null;

    return (
        <>
            <PostCreationManager />
        </>
    )
}