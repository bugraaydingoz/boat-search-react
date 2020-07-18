import styled from 'styled-components'

// Shared styles config
export const STYLES = {
  color: {
    primary: { default: '#1B4B64', darker: '#143648' },
    secondary: { default: '#D06B51', darker: '#C95436' },
    gray: {
      600: '#9C9C9C',
      900: '#F7F7F8',
    },
  },
  borderRadius: '12px',
  boxShadow: {
    input: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    card: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    cardHover:
      '0px 2px 4px rgba(0, 0, 0, 0.05), 0px 4px 15px rgba(0, 0, 0, 0.2)',
  },
}

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${(props) => STYLES.color[props.color].default};
  border: none;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  box-shadow: ${STYLES.boxShadow.input};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => STYLES.color[props.color].darker};
  }
`
