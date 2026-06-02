import FeaturesHero from "@/components/features/FeaturesHero";
import FeaturesIntelligenceSectionFIS from "@/components/features/FeaturesIntelligenceSectionFIS";
import FeaturesInvestmentsSection from "@/components/features/FeaturesInvestmentsSection";
import FeaturesPlatformSection from "@/components/features/FeaturesPlatformSection";
import FeaturesProtectionSection from "@/components/features/FeaturesProtectionSection";
import FeaturesTabsFTS from "@/components/features/FeaturesTabsSectionFTS";


export default function FeaturesPage() {
  return (
    <main className="featuresPageWrapperFB">
      <FeaturesHero />
      <FeaturesPlatformSection/>
      <FeaturesInvestmentsSection/>
      <FeaturesProtectionSection/>
      <FeaturesIntelligenceSectionFIS/>
      <FeaturesTabsFTS/>
      
    </main>
  );
}