import React from 'react'



export default (props) => {
  return (
    

<React.Fragment>
     <h1  className="  text-primary ">  Inscrivez vous  </h1>
      <input   onChange={props.onLoginChange}   placeholder='Login  (*)' className='form-control p-2 m-2' /> 
      <input    onChange={props.onPasswordChange}   placeholder='password  (*)'  type='password' 
      className='form-control  p-2 m-2'   /> 
         

       
       <input type="checkbox" checked data-toggle="toggle" />    let me connected .<br></br>
      <button
      
      style={{
        boxShadow: `2px 2px 2px gray`
       }}
      className="btn-primary btn "   onClick= {props.onSubmit} > Inscrire</button>

      <span className='text-muted' >  ...Or...  </span>


      <button
      style={{
        boxShadow: `2px 2px 2px gray`
       }}
      className='btn btn-success '  onClick={props.onLogin}  >  Login </button>

      {props.error!==''?<div className="alert alert-danger m-3 p-3" > {props.error} </div>:null}
    </React.Fragment>
  
  )
}
