import React from 'react'

import { Button as StyledButton } from './styles'

export function Button({ color = 'primary', children }) {
  return <StyledButton color={color}>{children}</StyledButton>
}
