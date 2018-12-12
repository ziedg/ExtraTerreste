import React, { Component } from 'react';
import axios from 'axios';
import Background from '../assets/images.jpeg';

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
    friends:'',
    imageUrl:null,
    error:''

  }

componentDidMount(){

    const token = localStorage.getItem('token')
    if(token){
      this.nextPath('/home')
    }


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
      

    const {login,password} = this.state;

    if( login ==='' | password===''){
        return this.setState({error:"Login or password shouldn't be empty ??"})
    }

     axios.post('http://localhost:4000/inscrire',{login,password

     }).then((res)=>{

   
    
   
     
      
      const {token} = res.data;
      if(res.data.ko){
         return  this.setState({error:"compte Deja existe ?? "})
      }
  
      localStorage.setItem('token',token);

        Promise.resolve( localStorage.setItem('user',JSON.stringify(this.state)) ).then(()=>{
          this.nextPath('/home')
        })

 
     
  })}


  onLogin = ()=>{

    const {login,password} = this.state;
    if( login ==='' | password===''){
     return  this.setState({error:"Login or password shouldn't be empty ??"})
    }

   
    axios.post('http://localhost:4000/login',{login,password}).then((res)=>{
      const {token} = res.data;
      localStorage.setItem('token',token);
      if(res.data){

       const {user}= res.data;
       this.setState({imageUrl:user.imageUrl});
      
        if(res.data.ko){
          return  this.setState({error:"Login or password Incorrect ?? "})
        }

        Promise.resolve( localStorage.setItem('user',JSON.stringify(this.state)) ).then(()=>{
          this.nextPath('/home')
        })
     
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
      <div className="container"  
        style={{
      margin:100,
      
    
      borderWidth:2,
    
      borderColor:'#eee',
      borderStyle:'solid',
      boxShadow: `7px 7px 7px gray`,
  
      padding:60,
      borderRadius:15,
    }}>

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
