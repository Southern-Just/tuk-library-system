'use client';
import Auth from "@/components/Auth"
import {signInSchema} from "@/lib/validations";

const Page = () => (

    <Auth
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
            email:"",
            password:"",
        }}
        onSubmit={()=>{}}
    />);
export default Page
