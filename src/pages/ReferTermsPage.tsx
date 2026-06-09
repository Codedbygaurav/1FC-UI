import LegalCTA from '@/components/legal/LegalCTA'
import ReferTermsHero from '@/components/refer-terms/ReferTermsHero'
import ReferTermsHighlight from '@/components/refer-terms/ReferTermsHighlight'
import ReferTermsSections from '@/components/refer-terms/ReferTermsSections'
import React from 'react'

export default function ReferTermsPage() {
  return (
    <div>
        <ReferTermsHero/>
        <ReferTermsHighlight/>
        <ReferTermsSections/>
         <LegalCTA label="Need clarification?" title="Questions about our Refer & Earn program?" description="Reviewing the referral terms? If you need help understanding eligibility, rewards, referral requirements, or program rules, we're here to assist."/>
      
    </div>
  )
}
