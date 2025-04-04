import React from 'react';
import CoverPiece from "@/components/CoverPiece"

interface Props {
    title?: string;
    books: Book_Meta[];
    containerClassName?: string;
}
const HeroCovers = ({title, books,containerClassName} : Props) => {
    return (
        <>
            <section className={containerClassName}>
                <h2 className="text-gold/80 text-2xl mb-10 ml-5">{title}</h2>
                <ul className='hero-covers'>
                    {books.map((book) => (
                        <CoverPiece key={book.title} {...book}/>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default HeroCovers;
