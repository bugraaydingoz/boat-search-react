import styled from 'styled-components'
export const HeaderFrame = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background-image: url('./images/header-bg.png');
  background-size: cover;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 530px;
`

export const Heading1 = styled.h1`
  display: flex;
  margin: 0 0 20px 0;
  font-weight: bold;
  font-size: 45px;
  line-height: 67px;
  color: #fff;
`

export const FilterFrame = styled.div`
  padding: 20px 0;
  width: 100%;
  /* height: 85px; */
  background-color: #fff;
  border-bottom: 1px solid #e1e1e5;
`
