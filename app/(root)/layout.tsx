import {ReactNode} from 'react';
import Header from "@/components/Header";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

const Layout = async ({children}:{children:ReactNode}) => {
    const session = await auth()
    if(!session) redirect("/sign-in")
    return (
        <main className=" flex flex-1 flex-col min-h-screen px-5 xs:px-10 md:px-16 ">
        <Header session={session}/>
            <div  className="mt-10 pb-20"> {children}</div>
        </main>
    );
}

export default Layout;
