import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';
const navBarStyle = {
  backgroundColor: 'lightblue',
};

const Header = (props) => {
  const { title } = props;
  return (
    <Navbar style={navBarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '12rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
