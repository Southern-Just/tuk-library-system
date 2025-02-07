import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Header = () => {
    return (
        <header className="my-6 flex justify-between gap-6">
            <Link href="/">
                <Image src="/icons/logo.svg" width={260} height={260} alt="Logo"/>
            </Link>
            <ul className="flex flex-row items-center gap-6">
                <li>
                    <Link href="/" className="text-base cursor-pointer">home</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
