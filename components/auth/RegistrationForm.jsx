"use client";

import { registerUser } from "@/app/actions";
import { useCallback, useState } from "react";
import { ErrorMessages } from "../ErrorMessages";
import { SubmitButton } from "../SubmitButton";

export default function RegistrationForm() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

   try {
    const formData = new FormData(event.target);
    const response = await registerUser(formData);
    if (response?.zodErrors) {
      setErrors({ ...errors, zodErrors: response.zodErrors });
    }
    if (response?.serverErrors) {
      setErrors({ ...errors, serverErrors: response.serverErrors });
    }
    setLoading(false)
   } catch (error) {
    setErrors({...errors, error: error})
    setLoading(false)
   }
  };


  const findErrors = useCallback(
    (fieldName) => {
      return errors?.zodErrors?
        .filter((item) => {
          return item.path.includes(fieldName);
        })
        .map((item) => item.message);
    },
    [errors]
  );
  const firstNameErrors = findErrors("firstName");
  const lastNameErrors = findErrors("lastName");
  const emailErrors = findErrors("email");
  const passwordErrors = findErrors("password");

  return (
    <form className='login-form' onSubmit={handleSubmit}>
      {errors?.serverErrors && <p className='font-medium text-rose-500 text-xl text-center'>{errors?.serverErrors}</p>}
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' name='firstName' id='firstName' />
        <ErrorMessages errors={firstNameErrors} />
      </div>

      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' name='lastName' id='lastName' />
        <ErrorMessages errors={lastNameErrors} />
      </div>

      <div>
        <label htmlFor='email'>Email Address</label>
        <input type='email' name='email' id='email' />
        <ErrorMessages errors={emailErrors} />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <ErrorMessages errors={passwordErrors} />
      </div>
      <SubmitButton loading={loading} />
    </form>
    
  );
}
