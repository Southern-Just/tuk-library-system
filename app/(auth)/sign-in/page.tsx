'use client';
import Auth from "@/components/AuthForm"
import {signInSchema} from "@/lib/validations";
import {signInWithCredentials} from "@/lib/actions/auth";

const Page = () => (

    <Auth
        type="SIGN_IN"
        schema={signInSchema}
        defaultValues={{
            email:"",
            password:"",
        }}
        onSubmit={signInWithCredentials}
    />);
export default Page
