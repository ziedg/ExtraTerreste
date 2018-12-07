import React, { Component } from 'react'

import axios from 'axios';

import {withRouter} from 'react-router-dom';
import { access } from 'fs';

export default class Friends extends Component {


    state={
        users:[],
          isFriend:[]
    }

    componentDidMount(){
  const token = localStorage.getItem('token');
        axios.get('http://localhost:4000/users',{headers:{'x-access-token':token}}).then((res)=>{
            const   users = res.data;
            this.setState({users})
        })
    }

     getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }



    handlefriend= (e)=>{
        
       
    }
    renderList = ()=>{

         let randomUsers = this.getRandom(this.state.users,3)
        return randomUsers.map((user)=>{

            if(!user) return null;
             return <li  className="list-group-item"> 
                      { user.login}- {user.familly}
                <i class="  m-3 p-3 fa fa-address-book-o text-primary" aria-hidden="true"  
                style={{cursor:'pointer'}}
                onClick= { ()=>this.handlefriend(user)}
                
                
                >
                  Add friend
                
                </i>
             </li>
        })
    }
  render() {
    return (
      <div>

<h3  className='text-info'> Propostions</h3>
       <ul class="list-group">
     {this.renderList()}
</ul>
        
      </div>
    )
  }
}
