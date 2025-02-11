import React from 'react';
import Link from 'next/link';
import  HeroCover from '@/components/HeroCover';

const CoverPiece = ({
coverImage, coverColor
}: Book_Meta)=>(
    <li>
        <Link href={'/'}>
            <HeroCover coverColor={ coverColor} coverImage={coverImage}/>
        </Link>
    </li>
)

export default CoverPiece;