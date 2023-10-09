import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import Provider from '../../../../components/Provider';
import { signIn } from 'next-auth/react';
import { connectToDB } from "@/utils/Db";





const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT-SECRET,
        })
    ],
    async session({session}) {
        
    },
    async signIn({profile}) {
        try{
             await connectToDB()

            return true
        }
        catch (error){
        console.log(error)
        return false
        }

    }

})

export {handler as GET,handler as post}

