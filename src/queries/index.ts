import { MessageTypeAnswerRatio } from '../model'
import { graphql } from '../providers/graphql/nhost'

export const getPastYearMessageAnswersRatio = (year: string) => async () => {
  // TODO : add error handling and error boundary in the ui
  const response = await graphql.request<{
    response_ratio: MessageTypeAnswerRatio[]
  }>(
    `{
        response_ratio(
          args: {
            start_date: "${`${year}0101`}", 
            end_date: "${`${year}1231`}"}
        ) { month ratio type year user_id }
    }`,
  )
  return response?.data?.response_ratio || []
}
