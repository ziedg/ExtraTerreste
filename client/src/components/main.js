import React, { Component } from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';


import Inscrire from '../components/Inscrire';


class Main extends Component {


  state = {
    login:'',
    pasword:'',
    age:0,
    famille:'',
    race:'',
    norriture:''

  }

  nextPath(path) {
    this.props.history.push(path);
  }

  onLoginChange = (e)=>{

    this.setState({login:e.target.value})
  }

  onPasswordChange = (e)=>{
    this.setState({password:e.target.value})
  }
  onAgeChange = (e)=>{
    this.setState({age:e.target.value})
  }
  onFamilleChange = (e)=>{
    this.setState({famille:e.target.value})
  }

  onSubmit = ()=>{
      

    const {login,password,age,famille} = this.state;
     axios.post('http://localhost:4000/inscrire',{login,password,age,famille

     }).then((res)=>{
     localStorage.setItem('user',JSON.stringify(this.state))
   this.nextPath('/home')
     })
  }
     


  render() {
    return (
      <div className="container">

      <Inscrire 
      onSubmit={this.onSubmit}
      onPasswordChange={this.onPasswordChange}
      onLoginChange={this.onLoginChange}
      onFamilleChange={this.onFamilleChange}
       onAgeChange={this.onAgeChange}   
         />
         </div>)
  

 
  
  }
}

export default withRouter(Main);
