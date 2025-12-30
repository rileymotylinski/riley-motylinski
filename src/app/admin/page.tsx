import SignIn from "@/src/components/SignIn";


export default async function Admin() {
    return (
    <>
        <div className="flex justify-center">
            <div className="p-5 bg-background rounded-xl">
                
                <SignIn />
            </div>
        </div> 
    </>
    )
}