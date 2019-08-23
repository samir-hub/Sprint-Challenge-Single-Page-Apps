import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.type}</span>
        </Card.Meta>
        <Card.Description>
        {props.dimension}
        </Card.Description>
      </Card.Content>
    </Card> 
      );
}
