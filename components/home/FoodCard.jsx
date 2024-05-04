import Image from "next/image";
import Link from "next/link";

export default function FoodCard({ recipe }) {
  const { name, thumbnail, id, rating, author } = recipe || {};
  return (
    <Link href={`/details/${id}`} className='card'>
      <Image
        src={thumbnail}
        className='rounded-md'
        alt='foodCard'
        width={300}
        height={160}
      />
      <h4 className='my-2'>{name}</h4>
      <div className='py-2 flex justify-between text-xs text-gray-500'>
        <span>⭐️ {rating}</span>
        <span>By: {author}</span>
      </div>
    </Link>
  );
}
