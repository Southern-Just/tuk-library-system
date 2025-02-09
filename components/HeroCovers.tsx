import React from 'react';
import Image from "next/image";

const HeroCovers = () => {
    return (
        <>
            <div className='flex gap-8 flex-row flex-wrap items-center justify-start ml-6 mt-4'>
                <Image src='/icons/book-1.svg' width={82} height={82} alt="volumeImage"/>
                <Image src='/icons/book-2.png' width={82} height={82} alt="volumeImage"/>
                <Image src='/icons/book-1.svg' width={82} height={82} alt="volumeImage"/>
                <Image src='/icons/book-2.png' width={82} height={82} alt="volumeImage"/>
            </div>
            <Image src='/images/ellipsis.png' width={62} height={62} alt="ellipsis  " className="justify-center mt-6 bg-light-200"/>
        </>
    );
}

export default HeroCovers;
