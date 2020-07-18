import styled from 'styled-components'
import { STYLES } from '../shared/styles'

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 530px;
  height: 60px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`

export const Input = styled.input`
  padding: 0 10px;
  width: 70%;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  border: none;
  color: ${STYLES.color.gray[600]};
`
