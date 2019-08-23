import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Air Date: {props.air_date}</span>
        </Card.Meta>
        <Card.Description>
        Episode Number: {props.episode}
        </Card.Description>
      </Card.Content>
    </Card>  
      );
}
