import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content>
        <h1>
            <Card.Header>Episode Name: {props.name}</Card.Header>
        </h1>
        <Card.Meta>
          <h1 className='date'>Air Date: {props.air_date}</h1>
        </Card.Meta>
        <Card.Description>
        <h1>Episode Number: {props.episode}</h1>
        </Card.Description>
      </Card.Content>
    </Card>  
      );
}
