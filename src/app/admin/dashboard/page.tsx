import { auth } from "@/auth";
import { AdminPostFeed } from "@/src/components/AdminPost/AdminPostFeed";
import { SignOut } from "@/src/components/SignOut";


export default async function Dashboard() {
    const session = await auth();
    if (!session?.user) return null;
    
    
    return(
        <>
            <AdminPostFeed />
            <SignOut />
        </>
    )
    
     
}

