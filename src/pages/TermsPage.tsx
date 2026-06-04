import LegalCTA from '@/components/legal/LegalCTA'
import TermsHero from '@/components/terms/TermsHero'
import TermsSections from '@/components/terms/TermsSections'
import React from 'react'

export default function TermsPage() {
  return (
    <div>
        <TermsHero/>
        <TermsSections/>
        <LegalCTA label="Need clarification?" title="Questions about our Terms & Conditions?" description="Our Terms & Conditions outline the rules and responsibilities that govern the use of 1FC services. If you need clarification on any section, we're here to help."/>
      
    </div>
  )
}
