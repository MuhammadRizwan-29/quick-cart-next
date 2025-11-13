import CTABanner from "@/components/CTABanner";
import FeaturedProducts from "@/components/FeaturedProduct";
import Products from "@/components/Products";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <Products />
      <FeaturedProducts />
      <CTABanner />
    </>
  );
}
