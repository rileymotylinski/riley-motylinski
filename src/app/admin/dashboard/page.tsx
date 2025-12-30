import { auth } from "@/auth";
import { SignOut } from "@/src/components/SignOut";

export default async function Dashboard() {
    const session = await auth();

    if (!session?.user) return null;
    return (
        <>
            <div>This is my admin panel</div>
            
            <SignOut />
        </>
    )
}