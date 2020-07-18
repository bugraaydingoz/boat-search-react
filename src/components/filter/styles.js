import styled from 'styled-components'
import { STYLES } from '../shared/styles'

export const FiltersContainer = styled.div`
  display: flex;
  margin: auto;
  width: 740px;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding: 5px 15px 5px 25px;
  /* width: 120px; */
  /* height: 45px; */
  border: 1px solid #e1e1e5;
  border-radius: 999px;
`

export const Label = styled.h6`
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

function resize(len) {
  if (!len) {
    return '40px'
  }

  return len * 10 + 'px'
}

// TODO: Fix length
export const Input = styled.input`
  display: flex;
  width: ${(props) => resize(props.value?.length)};
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${STYLES.color.primary.default};
  border: none;
`
