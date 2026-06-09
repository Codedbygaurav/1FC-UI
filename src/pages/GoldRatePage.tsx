import GoldCalculator from '@/components/gold rate/GoldCalculator'
import GoldCTA from '@/components/gold rate/GoldCTA'
import GoldFAQ from '@/components/gold rate/GoldFAQ'
import GoldMarketData from '@/components/gold rate/GoldMarketData'
import GoldRatesHero from '@/components/gold rate/GoldRateHero'
import LiveGoldRates from '@/components/gold rate/LiveGoldRates'


export default function GoldRatePage() {
  return (
    <div>
        <GoldRatesHero/>
        <LiveGoldRates/>
        <GoldCalculator/>
        <GoldMarketData/>
        <GoldFAQ/>
        <GoldCTA/>
      
    </div>
  )
}
