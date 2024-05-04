"use client";
import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BtnLoader from "../ui/BtnLoader";

export default function LoginForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const user = await performLogin(formData);
      if (user) {
        setAuth(user);
        setLoading(false);
        router.push("/");
      } else {
        setError("Please provide a valid credentials");
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  return (
    <>
      <div className='text-rose-500 font-medium '>*{error}</div>

      <form className='login-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' id='email' />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' />
        </div>

        {loading ? (
          <BtnLoader text='Logging' />
        ) : (
          <button
            type='submit'
            className='text-white bg-[#eb4a36] hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-3 text-center mt-4'
            disabled={loading}
          >
            Login
          </button>
        )}
      </form>
    </>
  );
}
