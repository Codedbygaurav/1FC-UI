import FDHighlights from '@/components/fd-terms/FDHighlights'
import FDTermsHero from '@/components/fd-terms/FDTermsHero'
import FDTermsSection from '@/components/fd-terms/FDTermsSection'
import LegalCTA from '@/components/legal/LegalCTA'
import React from 'react'

export default function FDTermsPage() {
  return (
    <div>
        <FDTermsHero/>
        <FDHighlights/>
        <FDTermsSection/>
        <LegalCTA label="Need clarification?" title="Questions about Fixed Deposit terms?" description="Reviewing our Fixed Deposit terms? If you need clarification on eligibility, interest rates, tenure, withdrawals, maturity, or other account conditions, we're here to help."/>
      
    </div>
  )
}
