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
  PrimaryText,
  SecondaryText,
} from './styles'

export function Boat() {
  return (
    <BoatContainer>
      <Image
        src="https://d1pkcile4c5gsr.cloudfront.net/boat/0003/81/thumb_280283_boat_expose_414x242.jpeg"
        alt="Boat picture"
        lazy
      />
      <DetailsContainer>
        {/* Title */}
        <Row>
          <Heading3>Sailboat Superior (1962)</Heading3>
          <Heading3>
            10€ <SecondaryText>/ Day</SecondaryText>
          </Heading3>
        </Row>

        {/* Reviews */}
        <Row>
          <Reviews score={3} reviews={100} />
          <SecondaryText>
            <Icon name="location" /> Barcelona, Spain
          </SecondaryText>
        </Row>

        {/* Details */}
        <Row>
          <Column>
            <Details />
          </Column>
          <FlexEnd>
            <Button>Book Now</Button>
          </FlexEnd>
        </Row>
      </DetailsContainer>
    </BoatContainer>
  )
}

function Details() {
  return (
    <>
      <SecondaryText>
        <Icon name="boat" /> <PrimaryText>32m</PrimaryText> long
      </SecondaryText>
      <SecondaryText>
        <Icon name="skipper" /> Skipper is <PrimaryText>included</PrimaryText>
      </SecondaryText>
      <SecondaryText>
        <Icon name="cabin" /> <PrimaryText>5</PrimaryText> cabins
      </SecondaryText>
      <SecondaryText>
        <Icon name="guests" /> Up to <PrimaryText>10</PrimaryText> guests
      </SecondaryText>
    </>
  )
}
