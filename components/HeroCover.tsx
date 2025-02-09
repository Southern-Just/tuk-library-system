import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"

const HeroCover = () => {
    return (
        <div className="hero-cover">
            <Image src="/icons/hero.svg" width={300} height={300} alt="heroImage"/>
            <p>Volume IV</p>
            <Button>
                <Image src="/icons/borrow_book.svg" width={300} height={300} alt="volumeImage"/>
                BORROW BOOK
            </Button>
        </div>
    );
}

export default HeroCover;
