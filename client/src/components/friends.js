import React, {
    Component
} from 'react'

import axios from 'axios';

import {
    withRouter
} from 'react-router-dom';


export default class Friends extends Component {


    state = {
        users: [],

    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:4000/users', {
            headers: {
                'x-access-token': token
            }
        }).then((res) => {
            let users = res.data;

            if (users) {

                users = users.map(user => {

                    if (user)

                    {
                        user['amie'] = false

                        if (user.login)
                            return {
                                ...user
                            }
                    }
                })


            }


            this.setState({
                users
            })
        })
    }





    handlefriend = (e, user) => {
        console.log(e.target)


        let users = this.state.users.filter((u) => {
            if( u && user)
                      return u.login !== user.login
        })



        this.setState(prev => {
            return {
                users
            }
        })
        const token = localStorage.getItem('token');
        if (user) user['amie'] = true
        axios.post('http://localhost:4000/addFriend ', {login:user.login}, {
                headers: {
                    'x-access-token': token
                }
            })
            .then((res) => {
                console.log(res)
            })




    }
    renderList = () => {


        return this.state.users.map((user) => {

            if (!user) return null;
            return <li 
            style={{borderRadius:10,
           
            }}
            className = "list-group-item m-1 " >
                <h4 className = "text-warning  mx-2 px-2" >
                    **  {
                    user.login

                 }  **
             </h4> 




                <button className = 'btn btn-info'
                style={{ boxShadow: `4px 6px 4px gray`}}
            onClick = {
                    (e) => this.handlefriend(e, user)
                } >

                <i class = "  fa fa-address-book-o fa text-info" aria  hidden = "true"
            style = {
                    {
                        cursor: 'pointer'
                    }
                }



                >



                </i>

            Add  Friend </button>   </li>  })
    }
    render() {
        return ( <div>
 <h1 className = 'text-info' > Propostions </h1>
 
  <ul   style={{margin:15 ,padding:8, }}class = "list-group" > {
                this.renderList()
            } </ul>

            </div>
        )
    }
}