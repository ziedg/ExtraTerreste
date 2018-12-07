import React, { Component } from 'react'

export default class Home extends Component {


  state={user:{},
  login:'',
  password:'',
  age:0,
  familly:'',
  race:'',
  noriture:''

  }
componentDidMount(){
  const user = JSON.parse(localStorage.getItem('user'))
  this.setState({user,login:user.login,age:user.age,familly:user.famille,password:user.password})

  
}


handleChanges= ()=>{
  console.log(this.state)
}
  render() {
    return (
      <div>

        <h1>   Welcome   { this.state.user.login}</h1>


      <h2  className='m-5 text-danger'  >    Modifier Profile </h2>

<div className='container'>

 <div className='row '>
  <div className='col'>
  <input 
  value={this.state.login}
   onChange={(e)=>{this.setState({login:e.target.value})}}
    placeholder='login'
  className='form-control  m-2 p-2 ' /> 
  </div>
  <div className='col'>
  <button className='btn btn-secondary  m-2 p-2 '> Edit </button>

  </div>
 </div>

  <div className='row '>
  <div className='col'>
  <input
   value={this.state.password}
   onChange={(e)=>{this.setState({password:e.target.value})}}
      placeholder='Password'
  className='form-control  m-2 p-2' /> 
  </div>
  <div className='col'>
  <button className='btn btn-secondary m-2 p-2 '> Edit </button>

  </div>
 </div>
 <div className='row '>
  <div className='col'>
  <input
   value={this.state.age}
   onChange={(e)=>{this.setState({age:e.target.value})}}
      placeholder='age'
  className='form-control m-2 p-2 '  /> 
  </div>
  <div className='col'>
  <button className='btn btn-secondary m-2 p-2'> Edit </button>

  </div>
 </div>
 <div className='row '>
  <div className='col'>
  <input
      placeholder='Familly'
      value={this.state.familly}
      onChange={(e)=>{this.setState({familly:e.target.value})}}
  className='form-control  m-2 p-2 ' /> 
  </div>
  <div className='col'>
  <button className='btn btn-secondary m-2 p-2 '> Edit </button>

  </div>
 </div>
 <div className='row '>
  <div className='col '>
  <input 
   value={this.state.race}
   onChange={(e)=>{this.setState({race:e.target.value})}}
      placeholder='race'
  className='form-control m-2 p-2 ' /> 
  </div>
  <div className='col'>
  <button className='btn btn-secondary m-2 p-2 '> Edit </button>

  </div>
 </div>
 <div className='row '>
  <div className='col'>
  <input 
      placeholder='noriture'
      value={this.state.noriture}
      onChange={(e)=>{this.setState({noriture:e.target.value})}}
  className='form-control m-2 p-2 ' /> 
  </div>
  <div className='col'>
  <button className='btn btn-secondary m-2 p-2 '> Edit </button>

  </div>
 </div>

 <button className='btn btn-success'  onClick={this.handleChanges}> submit  </button>
 <button className='btn btn-danger'  onClick={this.handleChanges}> cancel  </button>
 </div>
      

        
      </div>
    )
  }
}
