import React from 'react';
import Hero from "@/components/Hero";
import HeroCovers from "@/components/HeroCovers";
import {sampleBooks} from "@/constants";
import {users} from "@/database/schema";
import {db} from "@/database/db";

const Home = async() => {

    const result = await db.select().from(users);
    console.log(JSON.stringify(result, null, 2))
    return (
        <>
            <Hero {...sampleBooks[0]}/>
            <HeroCovers
            title='similar books'
            books={sampleBooks}
            containerClassName='mt-20'/>
        </>
    );
}

export default Home;
