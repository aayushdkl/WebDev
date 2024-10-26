import { useState } from "react"
const initialVal = {
  name: "",
  email: "",
  number: "",
  message: "",
}
export function HandlingMultipleInputs() {
  const [formData, setFormData] = useState(initialVal)

  function handleChange(e) {
    const { name, value } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    setFormData(initialVal)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id=""
          value={formData.name}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id=""
          value={formData.email}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Phone</label>
        <input
          type="number"
          name="number"
          id=""
          value={formData.number}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Message</label>
        <input
          type="text"
          name="message"
          id=""
          value={formData.message}
          onChange={handleChange}
        />
        <br />
        <button type="submit"> Submit</button>
      </form>
    </>
  )
}

// input types in HTML forms
// text
// password
// email
// number
// tel
// url
// date
// time
// color
// file
//Specifying types of input elements makes it easier for the browser to validate the data entered by the user.
//Form action attribute specifies where to send the form-data when a form is submitted.
//Some of the common attributes of the form element are:
//action: Specifies the URL where the form data is to be sent.
//method: Specifies the HTTP method to be used when submitting the form data.
//target: Specifies where to display the response that is received after submitting the form.
//name: Specifies the name of the form.
//enctype: Specifies how the form data should be encoded when submitting it to the server.

//An example of form action attribute:
// <form action="https://www.example.com">
//   <!-- form elements go here -->
//To make a form submit to the same page, you can use the value of the action attribute as an empty string:
// <form action="">
//   <!-- form elements go here -->

//To specify a submit button, you can use the <button> element with the type attribute set to submit:
// <button type="submit">Submit</button>
//You can also use the <input> element with the type attribute set to submit:
// <input type="submit" value="Submit">

//The button type attribute specifies the type of button. The default type is submit.
//The button element is used to create a clickable button that can be used to submit a form or trigger a JavaScript function.

//Some cool features provided by react forms are:
//1. Controlled components
//2. Uncontrolled components
//3. Form validation
//4. Handling multiple inputs
//5. Conditional rendering
//6. Formik
//7. React Hook Form
//8. Redux Form
//9. Yup
//10. Formsy
