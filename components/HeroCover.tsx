import React from 'react';
import Image from 'next/image';
import {cn} from "@/lib/utils";
import {Button} from '@/components/ui/button'

type HeroCoverVariant = 'full'| 'contained'
const variantStyles : Record<HeroCoverVariant, string> = {
    full:'hero-cover-full',
    contained:'hero-cover-contained',
};
interface Props {
    className?: string;
    variant?:HeroCoverVariant;
    coverImage: string;
}
const HeroCover = ({className, variant='contained', coverImage='/icons/hero.svg'} : Props) => {
    return (
        <div className={cn('relative', variantStyles[variant], className)}>
            <Image src={coverImage} width={300} height={300} alt="heroImage" className='object-fill' />
            <p>Volume IV</p>
            <Button>
                <Image src='/icons/borrow_book.svg' width={22} height={22} alt='borrowBook'/>
                Borrow Book
            </Button>
        </div>
    );
}

export default HeroCover;
