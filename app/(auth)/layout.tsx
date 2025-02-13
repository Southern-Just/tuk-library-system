import React, {ReactNode} from 'react'
import Image from 'next/image'
const Layout = ({children}:{children:ReactNode}) => {
    return (
        <main>
            <section className="relative flex flex-col ">
                <div className="flex my-auto h-full min-h-screen flex-1 items-center bg-cover bg-top px-4 py-8 ">
                    <div className='mx-auto flex flex-row gap-4 rounded-lg p-10 max-w-screen-lg'>
                        <h1>Technical University</h1>
                        <Image src="/icons/logo.svg" alt="logo" width="100" height="100"/>
                    </div>
                    <div>{children}</div>
                </div>
                <section className="sticky h-40 w-full " >
                    <Image
                    src='/images/background.png'
                    alt='background'
                    width='800'
                    height='800'
                    className='size-full object-cover'/>
                </section>

            </section>
        </main>
    )
}
export default Layout
