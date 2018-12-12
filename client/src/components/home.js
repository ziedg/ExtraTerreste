import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import Friends from './friends';

class Home extends Component {


  state={
    imageUrl:'',
    login:''


  }

  nextPath(path) {
    this.props.history.push(path);
  }
 async componentDidMount(){

 


  const user =  await  JSON.parse(localStorage.getItem('user'));
  if(user){
    console.log(user)
         this.setState({imageUrl:user.imageUrl,login:user.login})
  }

   
  


        
  
}

  onEdit = ()=>{
    this.nextPath('/edit-profile')
  }

  goListAmies= ()=>{
    this.nextPath('/amis')
  }


onLogout = ()=>{
     localStorage.removeItem('token');
     localStorage.removeItem('user');
     this.nextPath('/');
     
}
  render() {
    return (
      <div >



        <nav class="navbar navbar-expand-lg navbar-inverse  bg-success ">
  
  <a class="navbar-brand" href="#">
  
  <img src= {this.state.imageUrl}  style={{width:30,height:30}} className="rounded"  alt=''/>  Welcome   { this.state.login} 
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
     

  
   
      <li class="nav-item"
      
      >
                <a  className=' m-2 p-2  btn btn-outline-warning nav-link" href="#"'  onClick={this.onEdit} >    Modifier Profile </a>

      </li>


 <li class="nav-item">
 <a  className=' m-2 p-2  btn btn-outline-warning nav-link" href="#"'  onClick={this.goListAmies} >   Amis </a>

 </li>

    <li class="nav-item">
      <a className=' m-2 p-2 btn  btn-outline-danger nav-link" href="#" '  onClick={this.onLogout}> Logout </a>
      </li>
      
    


     
  
    </ul>
   
  </div>
</nav>

    
     

  

   








        
         


     




   

     <div className='row'>
     <div className='col-md-9'>
    
     </div>
     <div className='col-md-3'>
     <Friends />
     </div>
     </div>

     
     

</div>

   

        

    )
  }
}
export default withRouter(Home);