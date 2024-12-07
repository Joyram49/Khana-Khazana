import Image from "next/image";
import Link from "next/link";

export default function FoodCard({ recipe }) {
  const { name, thumbnail, id, rating, author } = recipe || {};
  return (
    <Link href={`/details/${id}`} className='card '>
      <div className='w-[300px] h-[160px] relative rounded-md overflow-hidden'>
        <Image
          fill
          src={thumbnail}
          className='absolute object-cover object-center'
          alt='foodCard'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <h4 className='my-2'>{name}</h4>
      <div className='py-2 flex justify-between text-xs text-gray-500'>
        <span>⭐️ {rating}</span>
        <span>By: {author}</span>
      </div>
    </Link>
  );
}
