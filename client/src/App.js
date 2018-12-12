import React, { Component } from 'react';
import axios from 'axios';
import  Main from  './components/main';


import { BrowserRouter as Router , Route, Link } from 'react-router-dom'

import './App.css';
import Background from'./assets/back.jpg';

import Home from './components/home';
import EditProfile from './components/EditProfile';
import ListAmies from './components/listAmis';



class App extends Component {


render() {
    return (
      <div  style={
        {
      margin:0,
      padding:0,
        backgroundImage:`url(${Background})`,
        backgroundRepeat:'no-repeat',
        overflow: 'auto',
        backgroundSize:'100%',
        height:'100%'}}>
    
   <Router>
     
<div>
       <Route path='/'   exact component={Main} />
     <Route path='/home' component={Home} />
     <Route path='/edit-profile' component={EditProfile} />
     <Route path='/amis' component={ListAmies} />
     </div>
     
   </Router>
   </div>
   
   )
   

  

 
  
  
}}

export default App;
