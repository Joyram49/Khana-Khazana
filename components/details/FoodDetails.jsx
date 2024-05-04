import FoodInfo from "./FoodInfo";
import FoodPoster from "./FoodPoster";

export default function FoodDetails({ recipe }) {
  return (
    <section>
      <div className='grid grid-cols-12 container gap-8 justify-items-center'>
        <FoodPoster poster={recipe?.image} />
        <FoodInfo recipe={recipe} />
      </div>
    </section>
  );
}
