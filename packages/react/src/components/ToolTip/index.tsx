import { ToolTipContainer } from './styles'

export interface ToolTipProps {
  date: string
  available: boolean
}

export function ToolTip({ date, available }: ToolTipProps) {
  return (
    <ToolTipContainer>
      <p>
        {date} - {available ? 'Disponível' : 'Indisponível'}
      </p>
    </ToolTipContainer>
  )
}
