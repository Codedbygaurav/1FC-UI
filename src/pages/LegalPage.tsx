import ComplaintsDisclosure from '@/components/legal/ComplaintsDisclosure'
import LegalCTA from '@/components/legal/LegalCTA'
import LegalDocuments from '@/components/legal/LegalDocuments'
import LegalHero from '@/components/legal/LegalHero'
import React from 'react'

export default function LegalPage() {
  return (
    <div>
        <LegalHero/>
        <LegalDocuments/>
        <ComplaintsDisclosure/>
        <LegalCTA title="Questions about our legal information?" description="We're committed to transparency. If you need clarification about our legal policies, terms, or compliance information, our team is here to help." label="Need assistance?"/>
      
    </div>
  )
}
