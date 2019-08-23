import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return ( 
      <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Status: {props.status}</span>
        </Card.Meta>
        <Card.Description>
        Kind: {props.species}
        </Card.Description>
      </Card.Content>
    </Card>
      );
}

