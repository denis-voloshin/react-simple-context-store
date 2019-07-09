import React from 'react';
import styled from 'styled-components';

import { useStore } from '../../store';

const Container = styled.div`
  padding: 10px;
  border: 1px solid #000;
`;

const Heading = styled.h1``;

const Row = styled.p``;

const Input = styled.input.attrs({ type: 'text' })``;

const FirstNameInput = styled(Input).attrs({ placeholder: 'Enter first name...' })``;
const LastNameInput = styled(Input).attrs({ placeholder: 'Enter last name...' })``;

export default () => {
  const [storeState, modifier] = useStore();

  const handleFirstNameChange = React.useCallback(
    ({ target }) => {
      modifier(state => {
        state.user.firstName = target.value;
      });
    },
    []
  );

  const handleLastNameChange = React.useCallback(
    ({ target }) => {
      modifier(state => {
        state.user.lastName = target.value;
      });
    },
    []
  );

  return (
    <Container>
      <Heading>Home page</Heading>
      <Container>
        <Heading>Store state</Heading>
        <Row>First name: { storeState.user.firstName }</Row>
        <Row>Last name: { storeState.user.lastName }</Row>
        <Row>Account name (immutable): My account</Row>
      </Container>

      <Container>
        <Heading>Modify store state</Heading>
        <Row>
          First name: <FirstNameInput onChange={handleFirstNameChange} value={storeState.user.firstName} />
        </Row>
        <Row>
          Last name: <LastNameInput onChange={handleLastNameChange} value={storeState.user.lastName} />
        </Row>
      </Container>
    </Container>
  );
};
