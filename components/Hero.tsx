import React from 'react';
import HeroCover from "@/components/HeroCover";

const Hero = ({
    id,
    title,
    description,
    author,
    total_books,
    available_books,
    coverImage}: Book_Meta) => {
    return (
        <section className="hero">
        <div className="hero-text">
            <h1 className="hero-text-h1">{title}</h1>
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
                        coverImage={coverImage}/>
      </section>
    );
}

export default Hero;
