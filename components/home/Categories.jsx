import { getAllCategories } from "@/db/queries";
import Link from "next/link";

export default async function Categories() {
  const categories = await getAllCategories();

  return (
    <ul className='pl-2 my-6 space-y-4 text-gray-500 text-sm'>
      {categories.map((category) => (
        <li key={category}>
          <Link href={`/categorized/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
}
