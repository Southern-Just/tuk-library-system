"use client";
import Image from 'next/image';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const Header = () => {
    const pathname = usePathname();
    return (
        <header className="my-6 flex justify-between gap-6">
            <Link href="/">
                <Image src="/icons/logo.svg" width={260} height={260} alt="Logo"/>
            </Link>
            <ul className="flex flex-row items-center gap-6">
                <li>
                    <Link href="/"
                          className={cn("text-base cursor-pointer px-4", pathname === '/' ? 'text-brand-100': 'text-black',)}
                    >
                        Home
                    </Link>
                    <Link href="/search"
                          className={cn("text-base cursor-pointer  px-4", pathname === '/search' ? 'text-brand-100': 'text-black',)}
                    >
                        Search
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
