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
            return ( <div className="card"   style={{width: "32rem"}} >
          
            <div className="card-body">
              <h5 className="card-title  text-primary ">{ami.login}</h5>
              <p className="card-text">  {ami.age}  - {ami.famille}</p>
              <a className="btn btn-outline-danger"   onClick={()=>this.deleteFriend(ami.login)}>  Delete  </a>
            </div>
            </div>
    
        
            )})
      
    }
  render() {
    return (
      <div>

  <Link to={'/home'}>  Go Home </Link>
 <h2 className=' text-muted'> List d'ami(e)s</h2> 

<div className='container'>

 {this.renderList()}
</div>
   


        
      </div>
    )
  }
}
