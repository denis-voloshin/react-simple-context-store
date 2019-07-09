import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border: 1px solid #000;
`;

const Heading = styled.h1``;

export default () => (
  <Container>
    <Heading>
      Home page
    </Heading>
  </Container>
);
