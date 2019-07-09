import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
  border: 1px solid #000;
`;

const Heading = styled.h1``;

const Row = styled.p``;

const Input = styled.input.attrs({ type: 'text' })``;

const FirstNameInput = styled(Input).attrs({ placeholder: 'Enter first name...' })``;
const LastNameInput = styled(Input).attrs({ placeholder: 'Enter last name...' })``;

export default () => (
  <Container>
    <Heading>Home page</Heading>
    <Container>
      <Heading>Store state</Heading>
      <Row>First name: Denis</Row>
      <Row>Last name: Voloshin</Row>
      <Row>Account name (immutable): My account</Row>
    </Container>

    <Container>
      <Heading>Modify store state</Heading>
      <Row>
        First name: <FirstNameInput />
      </Row>
      <Row>
        Last name: <LastNameInput />
      </Row>
    </Container>
  </Container>
);
