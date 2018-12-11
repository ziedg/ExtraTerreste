import React, { Component } from 'react'
import axios from 'axios';
import {Link} from'react-router-dom';

import {
    withRouter
} from 'react-router-dom';

export default class ListAmies extends Component {



    state={
        amis:[]
    }


    loadFriends = ()=>{
        const token = localStorage.getItem('token');
        axios.get('http://localhost:4000/getfriends', {
            headers: {
                'x-access-token': token
            }
        }).then((res) => {
         this.setState({amis:res.data})
         console.log(res.data)
        })
        .catch(err =>{
            console.log("errr:",err);
        })
    }
    componentWillMount(){
        this.loadFriends()

    }


    deleteFriend = (login)=>{

        const token = localStorage.getItem('token');
        axios.post('http://localhost:4000/deletefriend',{login} ,{
            headers: {
                'x-access-token': token
            }
        }).then((res) => {
        
         this.loadFriends();
        })
        .catch(err =>{
            console.log("errr:",err);
        })



    }

    renderList = ()=>{
        return this.state.amis.map((ami)=>{
            return ( 
    
                <div className="card  col-md-4 p-2" style={{width: "18rem" }}>
  <img  style={{width:'auto',height:180}}  className="card-img-top" src={ami.imageUrl} alt="Card image cap" />
  <div className="card-body">
    <h3 className="card-text text-success">  Name : {ami.login}</h3>
    
<h3 className="card-text text-success">   Age : {ami.age} </h3>
  <button className='btn btn-outline-danger'  onClick={()=> this.deleteFriend(ami.login)}>  Delete </button>
  </div>

</div>
        
            )})
      
    }
  render() {
    return (
      <div>

  <Link to={'/home'}>  <i class="fa fa-hand-o-left text-primary fa-2x m-2   " aria-hidden="true"></i> </Link>

  <div className='container'>
 <h2 className=' text-muted'> List d'ami(e)s</h2> 

<div className='container  row '>

 {this.renderList()}

 </div>
</div>
   


        
      </div>
    )
  }
}
