import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { getPastYearMessageAnswersRatio } from '../../queries'
import { DashboardPageComponent } from './Dashboard.component'

export const DashboardPage = () => {
  const [year, setYear] = useState(new Date().getFullYear().toString())

  const { data, isLoading } = useQuery({
    queryKey: ['getPastYearMessageAnswersRatio', year],
    queryFn: getPastYearMessageAnswersRatio(year),
  })

  return (
    <>
      <DashboardPageComponent
        messagesRatioData={data || []}
        messagesRatioDataLoading={isLoading}
        year={year}
        onYearChange={setYear}
      />
    </>
  )
}
