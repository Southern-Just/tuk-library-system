"use client"

import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const signUpSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    schoolId: z.coerce.number(),
    schoolCard: z.string().nonempty("school card required"),
    password: z.string().min(8),
});