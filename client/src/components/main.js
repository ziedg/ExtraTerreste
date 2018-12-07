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
    norriture:'',
    error:''

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


      const {token} = res.data;
      if(res.data.ko){
         return  this.setState({error:"compte Deja existe ?? "})
      }
  
      localStorage.setItem('token',token);

     localStorage.setItem('user',JSON.stringify(this.state))
   this.nextPath('/home')
     })
  }


  onLogin = ()=>{

    const {login,password} = this.state;
    axios.post('http://localhost:4000/login',{login,password}).then((res)=>{
      if(res.data){
        this.nextPath('/home')
      }
      else
      {
      
        this.setState({error:"Inscriez vous ?? "})
        

        
      }

 
    }
    )
  .catch(()=>{
    this.setState({error:"Inscriez vous ?? "})
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
       onLogin={this.onLogin}
       error={this.state.error}
         />
         </div>)
  

 
  
  }
}

export default withRouter(Main);
