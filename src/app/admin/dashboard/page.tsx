import { auth } from "@/auth";
import { AdminPostView } from "@/src/components/AdminPost/AdminPostView";
import { SignOut } from "@/src/components/SignOut";


export default async function Dashboard() {
    const session = await auth();
    if (!session?.user) return null;
    
    
    return(
        <>
            <div><SignOut /></div>

            <div className="flex justify-center items-center">
                <AdminPostView />
            </div>
            
        </>
    )
    
     
}

