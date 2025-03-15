import { MessagesRatioChart } from '../../components/MessageRatioChart'
import { PageLayout } from '../../components/PageLayout'
import { MessageTypeAnswerRatio } from '../../model'

type DashboardPageComponent = {
  messagesRatioDataLoading: boolean
  messagesRatioData: MessageTypeAnswerRatio[]
  onYearChange: (date: string) => void
  year: string
}

export const DashboardPageComponent = ({
  messagesRatioData,
  messagesRatioDataLoading,
  year,
  onYearChange,
}: DashboardPageComponent) => {
  return (
    <PageLayout title="Jarvi insights">
      <MessagesRatioChart
        data={messagesRatioData}
        loading={messagesRatioDataLoading}
        onYearChange={onYearChange}
        year={year}
      />
    </PageLayout>
  )
}
