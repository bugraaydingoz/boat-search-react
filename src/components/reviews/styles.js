import styled from 'styled-components'
import { STYLES } from '../shared/styles'

export const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ReviewText = styled.span`
  display: flex;
  margin-left: 5px;
  font-size: 12px;
  line-height: 18px;
  color: ${STYLES.color.gray[600]};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
