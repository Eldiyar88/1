import { Container } from '@chakra-ui/react';
import React from 'react';
import ItemPage from './components/pages/ItemPage';


function App(): JSX.Element {
  return (
    <Container maxW='container.xl'>
      <h1>Hello world</h1>
      <ItemPage />
    </Container>
  );
}

export default App;
