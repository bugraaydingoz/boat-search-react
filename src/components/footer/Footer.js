import React from 'react'

// Components
import { Icon } from '../shared'

// Styles
import { FooterFrame, Link } from './styled'

export function Footer() {
  return (
    <FooterFrame>
      <Link
        href="https://github.com/bugraaydingoz/boat-search-react"
        target="_blank"
      >
        <Icon name="github" />
      </Link>
    </FooterFrame>
  )
}
