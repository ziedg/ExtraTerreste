import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import axios from'axios';


 class EditProfile extends Component {

  state={ 
    users:[],  
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

  nextPath(path) {
    this.props.history.push(path);
  }


  handleChanges= ()=>{
    const token = localStorage.getItem('token');
    axios.post('http://localhost:4000/edit',this.state,{headers:{'x-access-token':token}}).then((res)=>{
        console.log(res.data);
        localStorage.setItem('user',JSON.stringify(this.state))
             
    })
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

  


 <button className='btn btn-outline-success p-2 m-2'  onClick={this.handleChanges}> Edit </button>
 <button className='btn btn-outline-danger  p-2 m-2'  onClick={this.returnHome}> Cancel  </button>
 </div>
      



    )
  }
}
export default withRouter(EditProfile);