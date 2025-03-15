import BarChartIcon from '@mui/icons-material/BarChart'
import { Paper, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import Typography from '@mui/material/Typography'
import { LineChart } from '@mui/x-charts'
import { useMemo } from 'react'
import { MessageTypeAnswerRatio } from '../../model'
import {
  buildAvailableYears,
  buildLegend,
  buildTimeAxisLabels,
  extractDataBySeries,
  sortDataByDate,
} from './MessageRatioChart.internals'

type ChartLineComponentProps = {
  data: MessageTypeAnswerRatio[]
  loading: boolean
  onYearChange: (date: string) => void
  year: string
}

export const MessagesRatioChart = ({
  data,
  loading,
  year,
  onYearChange,
}: ChartLineComponentProps) => {
  const { xAxisData, series } = useMemo(() => {
    if (!data) {
      return { xAxisData: undefined, series: [] }
    }
    sortDataByDate(data)
    const yAxisSeries = extractDataBySeries(data)
    const xAxisData = buildTimeAxisLabels(data)
    const series = buildLegend(yAxisSeries)
    return { xAxisData, series }
  }, [data])

  const handleYearChange = (_: React.MouseEvent<HTMLElement>, year: string) => {
    if (year !== null) {
      onYearChange(year)
    }
  }

  const availableYearsFilters = buildAvailableYears()

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 900, borderRadius: 3 }}>
      <Stack spacing={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <BarChartIcon color="primary" fontSize="small" />
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="text.primary"
            >
              Response rate by message type
            </Typography>
          </Stack>
          <ToggleButtonGroup
            color="primary"
            value={year}
            exclusive
            size="small"
            onChange={handleYearChange}
          >
            {availableYearsFilters.map((year) => (
              <ToggleButton key={year} value={year} sx={{ px: 2 }}>
                {year}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>
        <LineChart
          loading={loading}
          series={series}
          height={400}
          width={850}
          margin={{ bottom: 60, right: 180, top: 10 }}
          yAxis={[{ min: 0, max: 100, label: 'Answer Ratio (%)' }]}
          xAxis={[
            {
              id: 'ratio',
              scaleType: 'point',
              data: xAxisData,
              tickLabelStyle: {
                angle: 45,
                dominantBaseline: 'hanging',
                textAnchor: 'start',
              },
              labelStyle: { transform: 'translateY(15px)' },
            },
          ]}
          slotProps={{
            legend: {
              position: { vertical: 'middle', horizontal: 'right' },
              direction: 'column',
              padding: 0,
              itemGap: 15,
            },
          }}
        />
      </Stack>
    </Paper>
  )
}
