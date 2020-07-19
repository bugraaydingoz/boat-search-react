import React from 'react'

import { Button as StyledButton } from './styles'

export function Button({ color = 'primary', children, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  )
}
