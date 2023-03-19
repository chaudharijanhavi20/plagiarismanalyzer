import logo from './logo.svg';
import './App.css';

import React from 'react';
import Crd from './component/Crd';
import styled from 'styled-components';
import About from './component/About';

function App() {
  return (
    <Appcontainer>
    {/* <Crd/>
    <Crd/>
    <Crd/>
    <Crd/>
    <Crd/>
    <Crd/> */}
    <About/>
    </Appcontainer>
  );
}
const Appcontainer=styled.div`
display:flex;
width:100%;
flex-wrap:wrap;
align-items:center;
justify-content:space-evenly;
gap:1rem;`


export default App;
