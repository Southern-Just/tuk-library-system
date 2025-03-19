import React from 'react'
import HeroCovers from "@/components/HeroCovers";
import {sampleBooks} from "@/constants";
import {signOut} from "@/auth";
import {Button} from "@/components/ui/button";

const Page = () => {
    return (
        <>
            <form action={async()=>{

                "use server";
                await signOut();
            }}>
                <Button>Log Out</Button>

            </form>
            <HeroCovers
            title='Vitabu vyak Kasongo'
            books={sampleBooks}
            containerClassName='mt-20'/>
        </>
    )
}
export default Page
