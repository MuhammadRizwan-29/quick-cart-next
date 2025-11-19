import CTABanner from "@/components/CTABanner";
import FeaturedProducts from "@/components/FeaturedProduct";
import MainLayout from "@/components/MainLayout";
import Products from "@/components/Products";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Slider />
        <Products />
        <FeaturedProducts />
        <CTABanner />
      </MainLayout>
    </>
  );
}
