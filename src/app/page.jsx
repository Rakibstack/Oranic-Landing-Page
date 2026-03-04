import BeforeAfterSection from "@/components/BeforeAfterSection";
import ChooseCategory from "@/components/CategorySection";
import HeroSection from "@/components/HeroSection";
import InspiredSection from "@/components/InspiredSection";
import NaturalMakeupSection from "@/components/NaturalMakeupSection";
import PopularProducts from "@/components/PopularProducts";
import ReviewSection from "@/components/ReviewSection";
import SkinMarqueeSection from "@/components/SkinMarqueeSection";

export default function Home() {

  return (
    <div>
          <HeroSection></HeroSection>
          <SkinMarqueeSection></SkinMarqueeSection>
          <InspiredSection></InspiredSection>
          <ChooseCategory></ChooseCategory>
          <PopularProducts></PopularProducts>
          <NaturalMakeupSection></NaturalMakeupSection>
          <ReviewSection></ReviewSection>
          <BeforeAfterSection></BeforeAfterSection>
    </div>
  );
}
