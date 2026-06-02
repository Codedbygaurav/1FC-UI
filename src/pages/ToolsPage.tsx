import React from 'react'

import ToolsHero from '@/components/tools/toolsHero'
import ComingSoonTools from '@/components/tools/ComingSoonTools'
import ToolsCTA from '@/components/tools/ToolsCTA'


import ToolsGrid from '@/components/tools/ToolsGrid'
export default function ToolsPage() {
  return (
    <>
        <ToolsHero/>
            
            <ToolsGrid/>
            
            <ComingSoonTools/>
            <ToolsCTA/>
    </>
  )
}
