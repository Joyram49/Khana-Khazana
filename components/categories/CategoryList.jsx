import FoodCard from "../home/FoodCard";

export default function CategoryList({ recipes }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center'>
      {recipes?.map((recipe) => (
        <FoodCard key={recipe?.id} recipe={recipe} />
      ))}
    </div>
  );
}
