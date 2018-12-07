import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


 class EditProfile extends Component {

  state={  login:'',
  password:'',
  age:0,
  familly:'',
  race:'',
  noriture:''

  }

  nextPath(path) {
    this.props.history.push(path);
  }


  handleChanges= ()=>{
    console.log(this.state)
  }

  returnHome = ()=>{
      this.nextPath('/home')

  }


  render() {
    return (
    


    
<div className='container'    style={{margin:100,padding:20}}   >
  <h1  className='text-muted'>   Editer votre Profil</h1>


  <input 
  value={this.state.login}
   onChange={(e)=>{this.setState({login:e.target.value})}}
    placeholder='login'
  className='form-control  m-2 p-2 ' /> 

  




  <input
   value={this.state.password}
   onChange={(e)=>{this.setState({password:e.target.value})}}
      placeholder='Password'
  className='form-control  m-2 p-2' /> 

  



  <input
   value={this.state.age}
   onChange={(e)=>{this.setState({age:e.target.value})}}
      placeholder='age'
  className='form-control m-2 p-2 '  /> 

 

  <input
      placeholder='Familly'
      value={this.state.familly}
      onChange={(e)=>{this.setState({familly:e.target.value})}}
  className='form-control  m-2 p-2 ' /> 


 
  <input 
   value={this.state.race}
   onChange={(e)=>{this.setState({race:e.target.value})}}
      placeholder='race'
  className='form-control m-2 p-2 ' /> 
  



  <input 
      placeholder='noriture'
      value={this.state.noriture}
      onChange={(e)=>{this.setState({noriture:e.target.value})}}
  className='form-control m-2 p-2 ' /> 

  


 <button className='btn btn-outline-success p-2 m-2'  onClick={this.handleChanges}> submit  </button>
 <button className='btn btn-outline-danger  p-2 m-2'  onClick={this.returnHome}> cancel  </button>
 </div>
      



    )
  }
}
export default withRouter(EditProfile);