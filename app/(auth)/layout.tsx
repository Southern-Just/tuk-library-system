import React, {ReactNode} from 'react'
import Image from 'next/image'
const Layout = ({children}:{children:ReactNode}) => {
    return (
        <main className="auth-container">
            <div className="auth-logo">
                <Image
                    src='/icons/logo.svg'
                    alt='logo'
                    width='242'
                    height='242'
                    className='ml-5'/>
            </div>
            <section className="auth-form-container">
                <div className='auth-card'>
                    <h1 className="text-gold text-4xl p-6 font-bold">Library</h1>
                    <div className='auth-card-heading'>
                    <h1> The Technical </h1>
                    <h1> University of Kenya </h1>
                    </div>
                    <Image src='/images/auth.png' width={242} height={242} className="ml-5 rounded-lg" alt='auth-image'/>
                </div>
                <div className="auth-form">
                    <h1 className="text-green font-bold text-4xl">Log in to your library account</h1>
                    <div className='mt-24 '>{children}</div>
                </div>
            </section>
        </main>
    )
}
export default Layout
