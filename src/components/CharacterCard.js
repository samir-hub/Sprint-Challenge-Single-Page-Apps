import React from "react";
import { Card, Image } from 'semantic-ui-react'
import '../components/CharacterCard.css'

export default function CharacterCard(props) {
  return ( 
      <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <h3>
        <Card.Header>Name: {props.name}</Card.Header>
        </h3>
        <Card.Meta>
          <h1 className='date'>Status: {props.status}</h1>
        </Card.Meta>
        <Card.Description>
        <h1>Species: {props.species}</h1>
        </Card.Description>
      </Card.Content>
    </Card>
      );
}

