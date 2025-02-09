import {ReactNode} from 'react';
import Header from "@/components/Header";

const Layout = ({children}:{children:ReactNode}) => {
    return (
        <main className=" flex flex-1 flex-col min-h-screen px-5 xs:px-10 md:px-16 ">
        <Header/>
            <div> {children}</div>
        </main>
    );
}

export default Layout;
