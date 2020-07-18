import styled from 'styled-components'
import { STYLES } from '../shared/styles'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 95px;
`

export const PaginationButton = styled.button`
  display: flex;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 999px;
  border: 1px solid #e1e1e5;
  background-color: #fff;
  font-weight: ${({ selected }) => (selected ? '600' : '400')};
  font-size: 16px;
  line-height: 24px;
  color: ${({ selected }) => (selected ? '#000' : STYLES.color.gray[600])};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`
