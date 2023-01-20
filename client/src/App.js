import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import { LandingPage } from './Components/LandingPage/LandingPage.js';
import { Home } from './Components/Home/Home.js'
import { Detail } from './Components/Detail/Detail.js'
import { Form } from './Components/Form/Form.js';
import About from './Components/About/About';

function App() {
  return (
   <React.Fragment>

     <Route exact path="/" component={LandingPage}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/home" component={Home}/>
     <Route path="/country/:id" component={Detail}/>
     <Route path="/createActivity" component={Form}/>
     
   </React.Fragment>
  );
}

export default App;