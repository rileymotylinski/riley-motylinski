import { auth } from "@/auth";
import { AdminPostFeed } from "@/src/components/AdminPost/AdminPostFeed";
import { SignOut } from "@/src/components/SignOut";


export default async function Dashboard() {
    const session = await auth();
    if (!session?.user) return null;
    
    
    return(
        <>
            <div> <SignOut /></div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 place-content-center">
                    <AdminPostFeed />
                
                
                </div>
                
            </div>
            
        </>
    )
    
     
}

