import logo from './logo.svg';
import './App.css';

import React from 'react';
import Crd from './component/Crd';
import styled from 'styled-components';
import About from './component/About';
import  FooterSocial from './component/FooterSocial';


function App() {
  return (
    <Appcontainer>
    {/* <Crd/>
    <Crd/>
    <Crd/>
    <Crd/>
    <Crd/>
    <Crd/> */}
    {/* <About/> */}
    <FooterSocial/>
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
