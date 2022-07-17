import React from 'react'
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Banner from "./components/banner/banner";
import Rowpost from './components/Rowpost/rowpost';
import {Action,originals,Horror,Romance,Doc} from './urls'
function App(probs) {
  return (
    <div>
      <div>
   <Navbar />
  <Banner /> 
  <Rowpost url={originals}title="Netflix Originals"/>
  <Rowpost url={Action}title="Action Movies" isSmall />
  <Rowpost url={Horror}title="Horror Movies" isSmall />
  <Rowpost url={Romance}title="Romantic Movies" isSmall />
  <Rowpost url={Doc}title="Documentaries " isSmall />
      </div>
    </div>
  )
}

export default App;
