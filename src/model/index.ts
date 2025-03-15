export type MessageTypeAnswerRatio = {
  type: string
  year: string
  month: string
  type_month: string
  total_count: string
  ratio: number
  user_id: string
}

export const messageTypes = {
  EMAIL_SENT: 'Email',
  LINKEDIN_INMAIL_SENT: 'InMail',
  LINKEDIN_MESSAGE_SENT: 'Message',
} as const
