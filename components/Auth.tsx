"use client"

import {ZodType} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {DefaultValues, SubmitHandler, useForm, UseFormReturn} from "react-hook-form"
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {FIELD_NAMES, FIELD_TYPES} from "@/constants";
import Link from "next/link";

interface Props <T extends FieldValues>{
    type: "SIGN_IN" | "SIGN_UP";
    schema: ZodType<T>;
    defaultValues:T;
    onSubmit:(data:T) => Promise<{success:boolean, error?: string}>;
}
const Auth = <T extends FieldValues>({type,schema,defaultValues,onSubmit}: Props<T>) => {
    const isSignIn = type === "SIGN_IN"
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>
    });

    // 2. Define a submit handler.
    const handleSubmit:SubmitHandler<T>= async(data)=> {}

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                { Object.keys(defaultValues).map((field)=>(

                <FormField
                    key={field}
                    control={form.control}
                    name={field as Path<T>}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
                            <FormControl>
                                <Input className='auth-input' type={ FIELD_TYPES[field.name as keyof typeof  FIELD_TYPES]} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                    ))}
                <Button type="submit" className='auth-btn'>{isSignIn? "Sign In" : "Sign Up"} </Button>
                <div className='flex gap-2'>
                    <p>{isSignIn? 'New to Tuk Library?':  'Already have an account?'}</p>
                    <Link className="text-blue" href={isSignIn ? '/sign-up' : "/sign-in"}> {isSignIn ? 'Sign up' : "Sign in"}</Link></div>
            </form>
        </Form>
    )
}
export default Auth
