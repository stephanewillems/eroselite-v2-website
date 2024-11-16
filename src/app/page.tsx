import { CardsGrid } from "@/components/application/advertisements/cardsGrid";
import { Banner } from "@/components/application/banner";

const Home = () => {
  return (
    <div className="py-one">
      <Banner />
      <CardsGrid />
      <Banner />
      <CardsGrid />
    </div>
  );
};

export default Home;
