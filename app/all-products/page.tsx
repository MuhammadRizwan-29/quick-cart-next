import CTABanner from "@/components/CTABanner";
import MainLayout from "@/components/MainLayout";
import Products from "@/components/Products";

export default function Page() {
  return (
    <MainLayout>
      <Products />
      <CTABanner />
    </MainLayout>
  );
}
