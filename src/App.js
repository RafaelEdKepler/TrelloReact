import React, {useEffect} from 'react';
import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from './components/Header';
import Menu from './components/Menu';
import DropWrapper from './components/DropWrapper';

import {Container} from './style/style';

function App() {
  useEffect(() => {
    document.body.style = "background: #0079bf;"
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <Container>
        <Header/>
        <Menu/>
        <DropWrapper/>      
      </Container>
    </DndProvider>
  );
}

export default App;
