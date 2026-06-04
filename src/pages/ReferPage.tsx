import LegalCTA from '@/components/legal/LegalCTA'
import FAQSection from '@/components/refer/FAQSection'
import HowItWorks from '@/components/refer/HowItWorks'
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
        <LegalCTA label="Need clarification?" title="Questions about our Refer & Earn program?" description="Reviewing the referral terms? If you need help understanding eligibility, rewards, referral requirements, or program rules, we're here to assist."/>
      
    </div>
  )
}
