import Image from "next/image";

export default function FoodPoster({ poster }) {
  return (
    <div className='col-span-12 md:col-span-6'>
      <Image
        src={poster}
        alt='food banner'
        className='w-full h-full rounded-lg object-contain'
        width={800}
        height={600}
      />
    </div>
  );
}
