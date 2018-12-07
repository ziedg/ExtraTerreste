import React, { Component } from 'react'

import axios from 'axios';

import {withRouter} from 'react-router-dom';
import { access } from 'fs';

export default class Friends extends Component {


    state={
        users:[]
    }

    componentDidMount(){
  const token = localStorage.getItem('token');
        axios.get('http://localhost:4000/users',{headers:{'x-access-token':token}}).then((res)=>{
            const   users = res.data;
            this.setState({users})
        })
    }


    renderList = ()=>{
        return this.state.users.map((user)=>{

            if(!user) return null;
             return <li  className="list-group-item"> 
                      { user.login}- {user.familly}
                <i class="  m-3 p-3 fa fa-address-book-o text-primary" aria-hidden="true"> add friend</i>
             </li>
        })
    }
  render() {
    return (
      <div>

       <ul class="list-group">
     {this.renderList()}
</ul>
        
      </div>
    )
  }
}
