import React from 'react';
import Image from 'next/image';
import {cn} from "@/lib/utils";
import BackgroundObject from '@/components/BackgroundObject';

type HeroCoverVariant = 'full'| 'contained'
const variantStyles : Record<HeroCoverVariant, string> = {
    full:'hero-cover-full',
    contained:'hero-cover-contained',
};
interface Props {
    className?: string;
    variant?:HeroCoverVariant;
    coverColor:string;
    coverImage: string;
}
const HeroCover = ({className, variant='contained', coverColor="#ffffff", coverImage='/images/background.png'} : Props) => {
    return (
        <div className={cn('relative', variantStyles[variant], className)}>
            <BackgroundObject coverColor={coverColor}/>
            <div className='absolute z-10'
            style={{left:'13%', width:'86.6%', height:'87%'}}>
                <Image src={coverImage} fill alt="heroImage" className='object-fill' />
            </div>
        </div>
    );
}

export default HeroCover;