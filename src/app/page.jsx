import ChooseCategory from "@/components/CategorySection";
import HeroSection from "@/components/HeroSection";
import InspiredSection from "@/components/InspiredSection";
import PopularProducts from "@/components/PopularProducts";
import SkinMarqueeSection from "@/components/SkinMarqueeSection";

export default function Home() {

  return (
    <div>
          <HeroSection></HeroSection>
          <SkinMarqueeSection></SkinMarqueeSection>
          <InspiredSection></InspiredSection>
          <ChooseCategory></ChooseCategory>
          <PopularProducts></PopularProducts>
    </div>
  );
}
