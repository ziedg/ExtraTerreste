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
  noriture:'',
  file:null,
  selectedFile:null

  }


  componentDidMount(){


    const user = JSON.parse(localStorage.getItem('user'))
 
    if(user !== null)
           this.setState({user,login:user.login,age:user.age,familly:user.famille,password:user.password})
  
  
    
    
  }

  nextPath(path) {
    this.props.history.push(path);
  }


  handleChanges=   ()=>{

    const formData = new FormData()

      
    const token = localStorage.getItem('token');

 
    formData.append('myFile', this.state.selectedFile)
  


  
    const config = {
      headers: { 'content-type': 'multipart/form-data','x-access-token':token},
    
  }
    axios.post('http://localhost:4000/upload', formData,config).then((res)=>{
      this.nextPath('/home')
      console.log(res)

    })


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


<div className='row'>
<div className='col-md-8'>

  <input 
  disabled={true}
  value={this.state.login}
   onChange={(e)=>{this.setState({login:e.target.value})}}
    placeholder='login'
  className='form-control  m-2 p-2 ' /> 

  




  <input
   value={this.state.password}
   onChange={(e)=>{this.setState({password:e.target.value})}}
      placeholder='Password'
      type='password'
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

  <input   className='form-control  '  
   onChange={
    (e)=> this.setState({selectedFile:e.target.files[0] ,file:URL.createObjectURL(e.target.files[0])})} type='file' />

  


 <button className='btn btn-outline-success p-2 m-2'  onClick={this.handleChanges}> Edit </button>
 <button className='btn btn-outline-danger  p-2 m-2'  onClick={this.returnHome}> Cancel  </button>
 
 
 </div>


 <div className='col-md-4'>


 <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top"  style={{width:'auto',height:180}} src={ this.state.file}  alt="choose an avatar" />
  <div class="card-body">
    <h5 class="card-title">{this.state.login}</h5>
    <p class="card-text">   Famille :  {this.state.familly}  Age :   {this.state.age}</p>
    <a href="#" className="btn btn-outline-primary">  save </a>
  </div>

 </div>
 </div>
 </div>
 </div>
      



    )
  }
}
export default withRouter(EditProfile);