import styled from 'styled-components'
import { STYLES } from '../shared/styles'

export const FilterListContainer = styled.div`
  display: flex;
  margin: auto;
  width: 740px;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 5px 15px 5px 25px;
  width: 120px;
  /* height: 45px; */
  border: 1px solid #e1e1e5;
  border-radius: 999px;
`

export const Label = styled.label`
  margin: 0;
  display: flex;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: ${STYLES.color.gray[600]};
`

export const InputContainer = styled.div`
  display: flex;
`

export const Input = styled.input`
  display: flex;
  width: 32px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${STYLES.color.primary.default};
  border: none;
`
