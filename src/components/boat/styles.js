import styled from 'styled-components'
import { STYLES } from '../shared/styles'

export const BoatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 60px auto;
  width: 740px;
`

export const BoatContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  height: 210px;
  background-color: #fff;
  border-radius: ${STYLES.borderRadius};
  box-shadow: ${STYLES.boxShadow.card};

  &:last-child {
    margin-bottom: 0;
  }
`

export const Heading3 = styled.h3`
  margin: 0 0 5px 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${STYLES.color.primary.default};
`

export const Heading5 = styled.h5`
  margin: 0 0 10px 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${STYLES.color.gray[600]};
`

export const Text = styled.span`
  display: inline-flex;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: ${({ primary }) =>
    !!primary ? STYLES.color.primary.default : STYLES.color.gray[600]};
`

export const DetailText = styled.span`
  display: flex;
  margin: 0 0 5px 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${STYLES.color.gray[600]};
`

export const Image = styled.img`
  display: flex;
  background-color: ${STYLES.color.primary.default};
  border-bottom-left-radius: ${STYLES.borderRadius};
  border-top-left-radius: ${STYLES.borderRadius};
  width: 340px;
  height: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const FlexEnd = styled.div`
  display: flex;
  align-items: flex-end;
`
