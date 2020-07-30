import React, {useEffect} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import DropWrapper from './components/DropWrapper';
import Col from './components/Col';

import {Container} from './style/style';

function App() {
  useEffect(() => {
    document.body.style = "background: #007fb3;"
  }, [])

  return (
    <Container>
      <Header/>
      <Menu/>
      <Col/>      
    </Container>
  );
}

export default App;
