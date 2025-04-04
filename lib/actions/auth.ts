"use server";

import { eq } from "drizzle-orm";
import { users } from "@/database/schema";
import {hash} from "bcryptjs";
import {signIn} from "@/auth";
import {db} from "@/database/db";
import {headers} from "next/headers";
import ratelimit from "@/lib/ratelimit";
import {redirect} from "next/navigation";

export const signInWithCredentials = async (params: Pick<AuthCredentials, "email" | "password">) => {
    const {email, password} = params;

    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

    const {success} = await ratelimit.limit(ip)

    if(!success) return redirect('/slow-down')

    try{
        const result = await signIn("credentials", {email, password, redirect:false})
        if(result?.error){
            return({success:false , error: result.error})
        }
        return {success:true}
    }catch(error){
        console.log(error, "Sign in error");
        return{success: false, error: "Sign in error"};
    }
}
export const signUp = async (params: AuthCredentials) => {
    const {fullName, email, schoolId, password, schoolCard} = params;

    const ip = (await headers()).get("x-forwarded-for") || "127.0.0.1";

    const {success} = await ratelimit.limit(ip)

    if(!success) return redirect('/slow-down')


//check if user exists

    const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, email))
        .limit(1);

    if (existingUser.length > 0) {
        return {success: false, message: "User already exists"};
    }
    const hashedPassword = await hash(password, 10);

    try{
        await db.insert(users).values({fullName, email, schoolId, password: hashedPassword, schoolCard});

        await signInWithCredentials({email,password})
    }catch(error){
        console.log(error, "sign up failed");
        return{success:false, error: 'signup error'}
    }

}