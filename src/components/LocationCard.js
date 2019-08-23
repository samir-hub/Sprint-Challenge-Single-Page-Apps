import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <h1>
        <Card.Header>Name of Location: {props.name}</Card.Header>
        </h1>
        <Card.Meta>
          <h1 className='date'>Type: {props.type}</h1>
        </Card.Meta>
        <Card.Description>
        <h1>Dimension: {props.dimension}</h1>
        </Card.Description>
      </Card.Content>
    </Card> 
      );
}
