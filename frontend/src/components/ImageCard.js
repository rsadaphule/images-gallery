import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function doesExist(obj) {
  return obj && obj !== 'null' && obj !== 'undefined';
}

const ImageCard = ({ image, deleteImage }) => {
  console.log(image);
  if (doesExist(image)) {
    console.log('inside if');
    return (
      <Card>
        <Card.Img variant="top" src={image.urls.small} />
        <Card.Body>
          <Card.Title>{image.title.toUpperCase()}</Card.Title>
          <Card.Text>{image.description || image.alt_description}</Card.Text>
          <Button variant="primary" onClick={() => deleteImage(image.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
  }
};

export default ImageCard;
