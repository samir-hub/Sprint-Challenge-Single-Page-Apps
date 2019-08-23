import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{props.air_date}</span>
        </Card.Meta>
        <Card.Description>
        {props.episode}
        </Card.Description>
      </Card.Content>
    </Card>  
      );
}
