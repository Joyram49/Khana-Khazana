import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";

export default function Navbar() {
  return (
    <nav>
      <div className='container flex justify-between py-6 '>
        <Link href='/'>
          <Image src={logo} alt='logo' className='object-cover h-[40px]' />
        </Link>

        <ul className='flex gap-4 text-sm text-gray-500'>
          <li className='py-2 active'>
            <Link href='/'>Home</Link>
          </li>

          <li className='py-2'>
            <Link href='/'>Recipe</Link>
          </li>

          <li className='py-2'>
            <Link href='/'>About us</Link>
          </li>

          <SignInOut />
        </ul>
      </div>
    </nav>
  );
}
