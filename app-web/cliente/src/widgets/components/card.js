import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardArticle = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.src} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle>{props.subtitle}</CardSubtitle>
          <CardText>{props.text}</CardText>
          {props.children}
        </CardBody>
      </Card>
    </div>
  );
};

export default CardArticle;