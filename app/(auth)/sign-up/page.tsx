'use client';

import Auth from "@/components/Auth"
import {signUpSchema} from "@/lib/validations";

const Page = () => (

    <Auth
        type="SIGN_UP"
        schema={signUpSchema}
        defaultValues={{
            email:"",
            password:"",
            fullName:"",
            schoolId:0,
            schoolCard:""
        }}
        onSubmit={()=>{}}
        />);
export default Page
