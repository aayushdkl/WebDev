"use client"

import { useForm } from "react-hook-form"

export default function SimpleForm() {
  //initialize the form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  //define submit form
  function onSubmit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email:</label>
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        name="email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password:</label>
      <input
        {...register("password", {
          required: "Password is required",
          minLength: { value: 5, message: "Minimum length should be 5" },
        })}
        type="password"
        name="password"
        autoComplete="true"
      />
      {errors.password && <p>{errors.password.message}</p>}
      <label htmlFor="">Accept Terms:</label>
      <input
        type="checkbox"
        name="checkbox"
        id=""
        {...register("checkbox", { required: "Accept terms and conditions" })}
      />
      {errors.checkbox && <p>{errors.checkbox.message}</p>}

      <button type="submit">Login</button>
    </form>
  )
}
