import React from 'react'

// Components
import { Icon } from '../shared'

// Styles
import { ReviewsContainer, ReviewText } from './styles'

export function Reviews({ score = 0, reviews = 0 }) {
  // 1: full star, 0: empty star
  const stars = [...new Array(score).fill(1), ...new Array(5 - score).fill(0)]
  return (
    <ReviewsContainer>
      {stars.map((s, i) =>
        !!s ? (
          <Icon key={`star-${i}`} name="star" />
        ) : (
          <Icon key={`star-${i}`} name="star-empty" />
        )
      )}
      <ReviewText>
        {reviews} Reviews&nbsp;
        <Icon name="link" />
      </ReviewText>
    </ReviewsContainer>
  )
}
