import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => (
  <div class="bg-light p-3 mb-3 text-center">
    <h1 class="h1">Images Gallery</h1>
    <p>
      This is a simple application that retrieves photos using Unsplash API. In
      order to start enter any search term on the input field.
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target="_blank">
        Learn More
      </Button>
    </p>
  </div>
);

export default Welcome;
