import React from "react";
import { Card, Button} from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function CardSection(props) {
  const { url, title, no_of_comments} = props;
  return (
    <div>
      <Card className="card mb-4">
        <Popup trigger={<Card.Img variant="top" src={url}  /> } >
            <Card.Img src={url} alt="Image" className="popup"/>  
        </Popup>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary"> No of Comments {no_of_comments}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}