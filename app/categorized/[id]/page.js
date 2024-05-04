import CategoryList from "@/components/categories/CategoryList";
import { getRecipeByCategory } from "@/db/queries";
import { notFound } from "next/navigation";

export default async function CategorizedPage({ params: { id } }) {
  const category = decodeURIComponent(id);
  const recipes = await getRecipeByCategory(category);

  if (recipes?.length === 0) {
    return notFound();
  }
  return (
    <main>
      <section className='container py-8'>
        <div>
          <h3 className='font-semibold text-xl'>{category}</h3>
          <CategoryList recipes={recipes} />
        </div>
      </section>
    </main>
  );
}
