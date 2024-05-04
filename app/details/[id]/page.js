import FoodDetails from "@/components/details/FoodDetails";
import HowToMake from "@/components/details/HowToMake";
import { getRecipeById } from "@/db/queries";
import { notFound } from "next/navigation";
export async function generateMetadata({ params: { id } }, parent) {
  const recipe = await getRecipeById(id);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: recipe?.name,
    description: recipe?.description,
    openGraph: {
      title: recipe?.title,
      description: recipe?.description,
      siteName: "Khana-Khazana",
      images: [
        { url: recipe?.thumbnail, window: 800, height: 400 },
        ...previousImages,
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function DetailsPage({ params: { id } }) {
  const recipe = await getRecipeById(id);

  if (!recipe.id) {
    notFound();
  }
  return (
    <main>
      <FoodDetails recipe={recipe} />
      <HowToMake steps={recipe?.steps} />
    </main>
  );
}
