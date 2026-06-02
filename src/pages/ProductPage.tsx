
import ProductHero from "../components/product/ProductHero";
import ProductShowcase from "@/components/product/ProductShowcase";
import HowItWorks from "@/components/product/HowItWorks";
import FeatureMatrix from "@/components/product/FeatureMatrix";
import FinalCTA from "@/components/product/FinalCTA";
import TrustBar from "@/components/TrustBar";

export default function ProductPage() {
  return (
    <>

      <ProductHero />
        <TrustBar/>
      <ProductShowcase />
      <HowItWorks/>
      <FeatureMatrix/>
      <FinalCTA/>
    </>
  );
}