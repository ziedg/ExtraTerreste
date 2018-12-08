import React, { Component } from 'react'
import axios from 'axios';

import {
    withRouter
} from 'react-router-dom';

export default class ListAmies extends Component {



    state={
        amis:[]
    }

    componentDidMount(){
        const token = localStorage.getItem('token');
        axios.get('http://localhost:4000/getfriends', {
            headers: {
                'x-access-token': token
            }
        }).then((res) => {
         this.setState({amis:res.data.users})
         console.log(res.data.users)
        })
        .catch(err =>{
            console.log(err);
        })

    }


    renderList = ()=>{
        return this.state.amis.map((ami)=>{
            return  <h1>ami.login</h1>
        })
    }
  render() {
    return (
      <div>


ok
    {this.renderList()}


        
      </div>
    )
  }
}
