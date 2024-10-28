"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
export default function SimpleForm() {
  const signupSchema = z
    .object({
      email: z
        .string()
        .email({ message: " Invalid email" })
        .endsWith(".com", { message: "Only .com domains allowed" }),

      password: z.string().min(5, { message: "Minimum 5 characters" }),
      confirmPassword: z
        .string()
        .min(1, { message: "Password confirmation is required" }),
      checkbox: z.literal(true, {
        errorMap: () => ({ message: "Accept terms and conditions" }),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords donot match",
    })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
  })

  function onSubmit(data) {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email:</label>
      <input {...register("email")} type="email" name="email" />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password:</label>
      <input
        {...register("password")}
        type="password"
        name="password"
        autoComplete="true"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <label>Confirm Password:</label>
      <input
        {...register("confirmPassword")}
        type="password"
        name="confirmPassword"
        autoComplete="true"
      />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <div className="checkbox-container">
        <input type="checkbox" name="checkbox" {...register("checkbox")} />
        <label>Accept Terms and Conditions</label>
      </div>
      {errors.checkbox && <p>{errors.checkbox.message}</p>}

      <button type="submit">Login</button>
    </form>
  )
}
