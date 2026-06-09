import LegalCTA from '@/components/legal/LegalCTA'
import FAQSection from '@/components/refer/FAQSection'
import HowItWorks from '@/components/refer/HowItWorks'
import ReferEarnCTA from '@/components/refer/ReferCTA'
import ReferHero from '@/components/refer/ReferHero'
import ReferralBenefits from '@/components/refer/ReferralBenefits'
import RewardsSection from '@/components/refer/RewardSection'



export default function ReferPage() {
  return (
    <div>
        <ReferHero/>
        <HowItWorks/>
        <RewardsSection/>
        <ReferralBenefits/>
        <FAQSection/>
        <ReferEarnCTA/>
      
    </div>
  )
}
