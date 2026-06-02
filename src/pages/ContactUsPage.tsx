import ContactFormSection from '@/components/contact/ContactFormSection'
import ContactHero from '@/components/contact/ContactHero'

import ContactCTA from '@/components/contact/ContactCTA'
import ContactMethods from '@/components/contact/ContactMethods'
import WhyContactUs from '@/components/contact/WhyContactUs'
import FAQSection from '@/components/contact/FAQSection'

export default function ContactUsPage() {
  return (
    <div>
        <ContactHero/>
        <ContactMethods/>
        <ContactFormSection/>
        <WhyContactUs/>
        <FAQSection/>
        <ContactCTA/>
      
    </div>
  )
}
