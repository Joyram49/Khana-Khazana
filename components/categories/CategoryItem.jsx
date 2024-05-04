import banner from "@/public/cover.png";
import Image from "next/image";

export default function CategoryItem() {
  return (
    <div className='card'>
      <Image src={banner} className='rounded-md' alt='poster' />
      <h4 className='my-2'>Chef John's Turkey Sloppy Joes</h4>
      <div className='py-2 flex justify-between text-xs text-gray-500'>
        <span>⭐️ 5.0</span>
        <span>By: John Doe</span>
      </div>
    </div>
  );
}
