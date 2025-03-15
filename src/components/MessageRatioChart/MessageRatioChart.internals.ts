import { MessageTypeAnswerRatio, messageTypes } from '../../model'

export const buildAvailableYears = () => {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: 4 }, (_, index) =>
    (currentYear - index).toString(),
  ).reverse()
}

export const buildTimeAxisLabels = (data: MessageTypeAnswerRatio[]) => {
  return [
    ...new Set(
      data.map((item) => `${('00' + item.month).slice(-2)}-${item.year}`),
    ),
  ]
}

export const sortDataByDate = (data: MessageTypeAnswerRatio[]) =>
  data.sort((a, b) => {
    if (a.year === b.year) {
      return parseInt(a.month) - parseInt(b.month)
    } else {
      return parseInt(a.year) - parseInt(b.year)
    }
  })

export const extractDataBySeries = (data: MessageTypeAnswerRatio[]) => {
  return data.reduce((acc, cur) => {
    if (acc[cur.type]) {
      acc[cur.type].push(cur.ratio * 100)
    } else {
      acc[cur.type] = [cur.ratio * 100]
    }
    return acc
  }, {} as Record<string, number[]>)
}

export const buildLegend = (yAxisSeries: Record<string, number[]>) => {
  return Object.entries(yAxisSeries).map(
    ([key, value]) =>
      ({
        curve: 'linear',
        data: value,
        label: messageTypes[key as unknown as keyof typeof messageTypes],
      } as const),
  )
}
