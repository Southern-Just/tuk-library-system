import React from 'react';
import HeroCover from "@/components/HeroCover";

const Hero = ({
                  title,
                  description,
                  author,
                  total_books,
                  available_books,
                  coverImage, coverColor}: Book_Meta) => {
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
            <div className='relative flex flex-1 justify-center'>
            <div className='relative'>
                <HeroCover
                    variant='full'
                    className='z-5'
                    coverColor={coverColor}
                    coverImage={coverImage}/>
            </div>
            <div className='absolute top-10 left-5 max-md:hidden '>
                <HeroCover
                    variant='full'
                    className='z-10'
                    coverColor={coverColor}
                    coverImage={coverImage}/>
            </div>
            </div>
        </section>
    );
}

export default Hero;
