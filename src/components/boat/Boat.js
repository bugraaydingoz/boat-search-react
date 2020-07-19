import React from 'react'

// Components
import { Reviews } from '../reviews'
import { Icon, Button } from '../shared'

// Styles
import {
  BoatContainer,
  DetailsContainer,
  Row,
  Column,
  FlexEnd,
  Image,
  Heading3,
  Text,
  DetailText,
} from './styles'

function sentenceCase(text) {
  return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
}

function getType(type) {
  return type
    .split('_')
    .map((text) => sentenceCase(text))
    .join(' ')
}

function truncate(text, length) {
  if (text.length < length) {
    return text
  }

  return text.substr(0, length) + '...'
}

export function Boat(props) {
  const {
    type,
    name,
    year,
    imageUrl,
    price,
    reviews,
    locality,
    country,
    cabins,
    guests,
    skipper,
    length,
  } = props
  const title = `${getType(type)} ${name} (${year})`
  return (
    <BoatContainer>
      <Image src={imageUrl} alt="Boat picture" lazy />
      <DetailsContainer>
        {/* Title */}
        <Row>
          <Heading3>{title}</Heading3>
          <Heading3>
            {price}€ <Text secondary>/ Day</Text>
          </Heading3>
        </Row>

        {/* Reviews */}
        <Row>
          <Reviews score={reviews.score} reviews={reviews.total} />
          <Text secondary>
            <Icon name="location" /> {locality}, {truncate(country, 12)}
          </Text>
        </Row>

        {/* Details */}
        <Row>
          <Column>
            <Details
              length={length}
              cabins={cabins}
              guests={guests}
              skipper={skipper}
            />
          </Column>
          <FlexEnd>
            <Button>Book Now</Button>
          </FlexEnd>
        </Row>
      </DetailsContainer>
    </BoatContainer>
  )
}

function Details({ cabins, guests, skipper, length }) {
  let skipperText = skipper.toLowerCase()
  if (skipperText === 'bareboat') {
    skipperText = 'not included'
  }

  return (
    <>
      <DetailText>
        <Icon name="boat" />
        &nbsp; <Text primary>{length}m&nbsp;</Text> long
      </DetailText>
      <DetailText>
        <Icon name="skipper" />
        &nbsp; Skipper is <Text primary>&nbsp;{skipperText}</Text>
      </DetailText>
      <DetailText>
        <Icon name="cabin" />
        &nbsp; <Text primary>{cabins}&nbsp;</Text> cabins
      </DetailText>
      <DetailText>
        <Icon name="guests" />
        &nbsp; Up to <Text primary>&nbsp;{guests}&nbsp;</Text> guests
      </DetailText>
    </>
  )
}
