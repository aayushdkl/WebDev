import { useState } from "react"
const initialVal = {
  name: "",
  email: "",
  number: "",
  message: "",
  subscribe: false,
}

const regexPatterns = {
  name: /^[a-zA-Z\s'-]+$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  number: /^\+977-?9[6-8]\d{8}$/,
}

export function HandlingMultipleInputs() {
  const [formData, setFormData] = useState(initialVal)
  const [error, setError] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    validateInput(name, value)
  }
  function handleCheckboxChange(e) {
    const { name, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }))
    // validateInput(name, value)
  }

  function validateInput(name, value) {
    let errorMessage = ""
    if (regexPatterns[name] && !regexPatterns[name].test(value)) {
      errorMessage = `*Please enter a valid ${name}`
    }
    setError((prevError) => ({
      ...prevError,
      [name]: errorMessage,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    for (const key in error) {
      if (error[key]) {
        return
      }
    }
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
          placeholder="Eg: Aayush Dhakal"
        />{" "}
        {error.name && <dl>{error.name}</dl>}
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id=""
          value={formData.email}
          onChange={handleChange}
          placeholder="Eg: example@gmail.com"
        />{" "}
        {error.email && <dl>{error.email}</dl>}
        <br />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="number"
          id=""
          value={formData.number}
          onChange={handleChange}
          placeholder="Eg: +9779812345678"
        />{" "}
        {error.number && <dl>{error.number}</dl>}
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
        <input
          type="checkbox"
          name="subscribe"
          id=""
          checked={formData.subscribe}
          onChange={handleCheckboxChange}
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

//The elements like input, textarea, and select maintain their own state and update it based on user input.
//Some more block elements are:
//1. address
//2. article
//3. aside
//4. blockquote
//5. details
//6. dialog
//7. dl
//8. dl
//9. fieldset
//10. figcaption
