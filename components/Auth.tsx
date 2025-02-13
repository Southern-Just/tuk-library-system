"use client"

import {ZodType} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {DefaultValues, SubmitHandler, useForm, UseFormReturn} from "react-hook-form"
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props <T extends FieldValues>{
    type: "SIGN_IN" | "SIGN_UP";
    schema: ZodType<T>;
    defaultValues:T;
    onSubmit:(data:T) => Promise<{success:boolean, error?: string}>;
}
const Auth = <T extends FieldValues>({type,schema,defaultValues,onSubmit}: Props<T>) => {
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>
    });

    // 2. Define a submit handler.
    const handleSubmit:SubmitHandler<T>= async(data)=> {}

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Username" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
export default Auth
