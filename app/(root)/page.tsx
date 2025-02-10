import React from 'react';
import Hero from "@/components/Hero";
import HeroCovers from "@/components/HeroCovers";
import {sampleBooks} from "@/constants";

const Home = () => {

    return (
        <>
            <Hero {...sampleBooks[0]}/>
            <HeroCovers/>
        </>
    );
}

export default Home;
