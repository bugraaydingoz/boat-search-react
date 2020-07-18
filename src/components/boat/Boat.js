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
            10€ <Text secondary>/ Day</Text>
          </Heading3>
        </Row>

        {/* Reviews */}
        <Row>
          <Reviews score={3} reviews={100} />
          <Text secondary>
            <Icon name="location" /> Barcelona, Spain
          </Text>
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
      <DetailText>
        <Icon name="boat" />
        &nbsp; <Text primary>32m&nbsp;</Text> long
      </DetailText>
      <DetailText>
        <Icon name="skipper" />
        &nbsp; Skipper is <Text primary>&nbsp;included</Text>
      </DetailText>
      <DetailText>
        <Icon name="cabin" />
        &nbsp; <Text primary>5&nbsp;</Text> cabins
      </DetailText>
      <DetailText>
        <Icon name="guests" />
        &nbsp; Up to <Text primary>&nbsp;10&nbsp;</Text> guests
      </DetailText>
    </>
  )
}
