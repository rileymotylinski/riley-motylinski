import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 
// whitelist
// THIS SHOULD NEVER BE CHANGED
const ALLOWED_USERS = ["rileymotylinski"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    // handling signIn event
    async signIn({ profile }) {
        // making sure, 100%, that the parameter exists in profile
        if (
        typeof profile === "object" &&
        profile !== null &&
        "login" in profile &&
        typeof profile.login === "string"
        ) {
        return ALLOWED_USERS.includes(profile.login);
        }
        return false;
    }
  }
})

