import { auth } from "@/auth";

export default async function Dashboard() {
    const session = await auth();
    if (!session?.user) return null;
    
    
    return(
        <>
            <div><SignOut /></div>

            <div className="flex justify-center items-center">
                <AdminPostView />
            </div>
            <div>
         
            </div>
            
        </>
    )
    
     
}

