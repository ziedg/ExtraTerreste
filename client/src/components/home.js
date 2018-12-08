import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import Friends from './friends';
import EditProfile from './EditProfile';
class Home extends Component {


  state={user:{}


  }

  nextPath(path) {
    this.props.history.push(path);
  }
componentDidMount(){
  const user = JSON.parse(localStorage.getItem('user'))
  this.setState({user,login:user.login,age:user.age,familly:user.famille,password:user.password})

  
}

  onEdit = ()=>{
    this.nextPath('/edit-profile')
  }


onLogout = ()=>{
     localStorage.removeItem('token');
     this.nextPath('/');
     
}
  render() {
    return (
      <div>



        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
  <a class="navbar-brand" href="#">
  
  <img src= {require("../assets/images.jpeg")}  style={{width:30,height:30}} className="rounded" alt="n"/>  Welcome   { this.state.user.login} 
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
 <a  className=' m-2 p-2  btn btn-outline-warning nav-link" href="#"'  onClick={this.onEdit} >   Amis </a>

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