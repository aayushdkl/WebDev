//initialize the form
const {
  register,
  handleSubmit,
  formState: { errors }, // In this line, we are destructuring the errors object from the formState object. The errors object contains all the error messages that are generated when the form is submitted.
  //  Here formState is an object that contains all the state of the form. The errors object contains all the error messages that are generated when the form is submitted.
  // The example of errors object is like this:
  // {
  //   email: { type: "required", message: "Email is required" },
  //   password: { type: "required", message: "Password is required" }
  // }
} = useForm()

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>Email:</label>
    <input
      {...register("email", { required: "Email is required" })} //In this line , we are using the register function to register the input field with the name email. We are also passing an object with the required key set to Email is required. This is a validation rule that will be used to validate the input field.
      //the change that happens after putting required is that the input field will be required and the form will not be submitted if the input field is empty.
      //On the site, if you try to submit the form without entering the email, you will see the error message Email is required.
      //The sentence after the required key is the error message that will be displayed if the input field is empty.
      //Is this the syntax for the error message? Yes, this is the syntax for the error message. You can change the error message to anything you want.
      //In place of required , we can also use other validation rules like minLength, maxLength, pattern , lowercase, uppercase, etc.
      //For example, if you want to set the minimum length of the email to 5 characters, you can use the minLength rule like this:
      // {...register("email", { minLength: { value: 5, message: "Minimum length is 5" } })}
      // { minLength: { value: 5, message: "Minimum length is 5" } }Here two curly braces are used. The first curly brace is used to define the minLength rule. The second curly brace is used to define the value and message of the rule.
      type="email"
    />
    {errors.email && <p>{errors.email.message}</p>}

    <label>Password:</label>
    <input {...register("password")} type="password" />

    <button type="submit">Login</button>
  </form>
)
