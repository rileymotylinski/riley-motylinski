import { signOut } from "@/auth"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
        // TODO: Redirect on logout
      }}
    >
    

            
    <button type="submit" className="p-1 text-cente ml-2.5 mt-2.5 rounded-md bg-blue-600 hover:bg-blue-700 active:bg-blue-800">Sign out</button>

    </form>
  )
}