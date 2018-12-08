import React, { Component } from 'react';
import axios from 'axios';
import Background from './assets/images.jpeg';
import  Main from  './components/main';

import { BrowserRouter as Router , Route, Link } from 'react-router-dom'

import './App.css';

import Home from './components/home';
import EditProfile from './components/EditProfile';
import ListAmies from './components/listAmis';



class App extends Component {


render() {
    return (
    
   <Router>
     <div  style={{ backgroundImage: "url(" + { Background } + ")"}}>

       <Route path='/'   exact component={Main} />
     <Route path='/home' component={Home} />
     <Route path='/edit-profile' component={EditProfile} />
     <Route path='/amis' component={ListAmies} />
     </div>
     
   </Router>)
   

  

 
  
  
}}

export default App;
