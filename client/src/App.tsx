import React from 'react';
import './App.css';
import { HomePage } from './app/containers/HomePage';
import styled from 'styled-components'
import tw from 'twin.macro'

const AppContainer = styled.div`
    ${tw`
        flex flex-col w-full h-full
    `}
`

function App() {
  return (
    <AppContainer>
      <HomePage/>
    </AppContainer>
  );
}

export default App;
