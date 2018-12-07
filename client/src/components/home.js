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


<div className='row'>
<div className='col-md-9'>
<h1  className='ml-5'>   Welcome   { this.state.user.login}</h1>  
</div>
<div className='col'>
<button className='btn  btn-outline-danger'  onClick={this.onLogout}> Logout </button>
</div>
</div>
        
         


      <button  className='m-5 btn btn-outline-warning'  onClick={this.onEdit} >    Modifier Profile </button>

<div className='row'>



   

      <div className='col-md-3'>
      <Friends />
      </div>
      </div>

   

        
      </div>
    )
  }
}
export default withRouter(Home);