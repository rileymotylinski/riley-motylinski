import { signIn } from "@/auth"
import GithubLogo from "@/src/components/static/github-mark.png";
import Image from "next/image";
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", {redirectTo: "/admin/dashboard"})
        
      }}
    >
        <div className="flex rounded-md bg-blue-600 items-center p-2.5 hover:bg-blue-700 active:bg-blue-800">
            <div className="w-1/5">
                <Image
                src={GithubLogo}
                width={30}
                height={30}
                alt="Github Image"/>

            </div>
            
            <button type="submit" className="min-w-50">Sign in with GitHub</button>
        </div>
        
    </form>
  )
} 