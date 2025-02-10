import React from 'react';
import HeroCover from "@/components/HeroCover";

const Hero = ({title,description,author,total_books,available_books,cover}: Book_Meta) => {
    return (
        <section className="hero">
        <div className="hero-text">
            <p className="hero-text-h1">{title}</p>
            <p className="hero-text-description">{description}</p>
            <div className="hero-text-add">
                <p >author: {author}</p>
                <p >All: {total_books}</p>
                <p>Available:<span> {available_books}</span></p>
            </div>
        </div>
            <HeroCover
                variant='full'
                className='z-5'
                coverImage={cover}/>
      </section>
    );
}

export default Hero;
