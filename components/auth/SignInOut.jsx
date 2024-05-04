"use client";

import { clearCachesByServerAction } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";

export default function SignInOut() {
  const { auth, setAuth } = useAuth();
  // const router = useRouter();
  const logout = () => {
    setAuth(null);
    // router.push("/");
    clearCachesByServerAction();
  };
  return (
    <>
      {auth ? (
        <li>
          <span className='mx-2'>{auth?.firstName}</span>
          <span className='mx-1'>|</span>
          <button
            className=' py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center'
            onClick={logout}
          >
            Logout
          </button>
        </li>
      ) : (
        <li className='py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center'>
          <Link href='/login'>login</Link>
        </li>
      )}
    </>
  );
}
