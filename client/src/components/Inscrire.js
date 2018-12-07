import React from 'react'


export default (props) => {
  return (
    <div className="container mt-5">

     <h1  className="  text-primary display-4">  Inscrire </h1>
      <input   onChange={props.onLoginChange}   placeholder='Login  (*)' className='form-control p-2 m-2' /> 
      <input    onChange={props.onPasswordChange}   placeholder='password  (*)'  type='password' 
      className='form-control  p-2 m-2'   /> 
            <input   onChange={props.onAgeChange}    placeholder='Age (Optional) '  className=' p-2 m-2 form-control' />
      <input    onChange={props.onFamilleChange}    placeholder='Famille  (Optional)' className= 'p-2 m-2 form-control' />

      <button className="btn-primary btn btn-block"   onClick= {props.onSubmit} > Inscrire</button>

      <h3 className='text-muted' > OR  </h3>


      <button className='btn btn-success  btn-block'  onClick={props.onLogin}  >  Login </button>

      {props.error!==''?<div className="alert alert-danger m-3 p-3" > {props.error} </div>:null}
    </div>
  )
}
