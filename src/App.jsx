import { useContext, useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from '../src/Components/Header/HeaderComp' 
import FooterComp from './Components/Footer/FooterComp';

function App() {

  return (
    <div className="App">
      <h1>Hello world i am updated!!</h1>
      <HeaderComp name='World' />
      <FooterComp />
      <h1>ghjhygtfghyujihyg</h1>
    </div>
  );
}

export default App;
