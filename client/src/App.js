import React, { Component } from 'react';
import axios from 'axios';
import  Main from  './components/main';

import { BrowserRouter as Router , Route, Link } from 'react-router-dom'

import './App.css';

import Home from './components/home';



class App extends Component {


render() {
    return (
    
   <Router>
     <div>

       <Route path='/'   exact component={Main} />
     <Route path='/home' component={Home} />
     </div>
     
   </Router>)
   

  

 
  
  
}}

export default App;
