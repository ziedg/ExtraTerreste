import React, { Component } from 'react'
import axios from 'axios';

import {
    withRouter
} from 'react-router-dom';

export default class ListAmies extends Component {



    state={
        amis:[]
    }

    componentWillMount(){
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


    renderList = ()=>{
        return this.state.amis.map((ami)=>{
            return ( <div className="card" >
          
            <div className="card-body">
              <h5 className="card-title  text-primaey ">{ami.login}</h5>
              <p className="card-text">  {ami.age}  - {ami.famille}</p>
              <a className="btn btn-outline-danger">  Delete  </a>
            </div>
            </div>
    
        
            )})
      
    }
  render() {
    return (
      <div>


 <h2 className=' text-muted'> List d'ami(e)s</h2>

<div className='container'>

 {this.renderList()}
</div>
   


        
      </div>
    )
  }
}
