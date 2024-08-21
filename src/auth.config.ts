import { NextAuthConfig } from "next-auth";
import Github from "next-auth/providers/github";

export default {
    providers : [Github],
    session : {
        strategy : "jwt"
    }
} satisfies NextAuthConfig