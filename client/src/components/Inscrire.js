import React from 'react'


export default (props) => {
  return (
    <div className="container mt-5">

     <h1  className="  text-primary display-4">  Inscrire </h1>
      <input   onChange={props.onLoginChange}   placeholder='Login' className='form-control p-2 m-2' />
      <input    onChange={props.onPasswordChange}   placeholder='password'  type='password' 
      className='form-control  p-2 m-2'   />
      <input   onChange={props.onAgeChange}    placeholder='Age '  className=' p-2 m-2 form-control' />
      <input    onChange={props.onFamilleChange}    placeholder='Famille' className= 'p-2 m-2 form-control' />

      <button className="btn-primary btn btn-block"   onClick= {props.onSubmit} > Inscrire</button>
    </div>
  )
}
