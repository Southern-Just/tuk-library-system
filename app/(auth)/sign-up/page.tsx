'use client';

import Auth from "@/components/AuthForm"
import {signUpSchema} from "@/lib/validations";
import {signUp} from "@/lib/actions/auth"

const Page = () => (

    <Auth
        type= "SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            email:"",
            password:"",
            fullName:"",
            schoolId:0,
            schoolCard:""
        }}
        onSubmit={signUp}
        />
);
export default Page
