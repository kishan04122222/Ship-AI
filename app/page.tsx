import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async() => {
  const companions = await getAllCompanions({limit:3});
  const recentSessionCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1 className='underline text-2xl'>Famous Companions</h1>
      <section className='home-section'>
        {companions.map((companion) =>(
          <CompanionCard 
          key={companion.id}
          {...companion}
          color = {getSubjectColor(companion.subject)}
        />
        ))}
       
      </section>

      <section className='home-section'>

        <CompanionList 
        className = 'w-2/3 max-lg:w-full'
          title = "Recently Completed Sessions"
          companions = {recentSessionCompanions}
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page