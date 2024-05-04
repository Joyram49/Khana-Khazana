import Categories from "@/components/home/Categories";
import FoodCardList from "@/components/home/FoodCardList";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className='container py-8'>
        <div className='grid grid-cols-12 py-4'>
          <div className='col-span-12 md:col-span-3'>
            <h3 className='font-bold text-xl'>Recipes</h3>
            <Categories />
          </div>
          <FoodCardList />
        </div>
      </section>
    </main>
  );
}
