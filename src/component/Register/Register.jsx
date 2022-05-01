import React, { useState } from 'react'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'


export default function Register () {


  const [erroList, setErroList] = useState([])
  let navigate= useNavigate();
  const [isloading, setIsloading] = useState(false)
  const [erro, setErro] = useState('')
  const [user, setuser] = useState({
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    password: '',
  })

  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setuser(myUser);

  }

  async function submitRegister(e) {
    e.preventDefault();
    let validationResult = validateRegisterForm(user);
    if (validationResult.error) {
      setIsloading(false)
      setErroList(validationResult.error.details)
    } else {
      let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signup', user);
      if (data.message === 'success') {
        setIsloading(false)
        navigate('/login')
      } else {
        setErro(data.message)
        setIsloading(false)
      }
    }
  }

  function validateRegisterForm(user) {
    let schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(8).required(),
      last_name: Joi.string().alphanum().min(3).max(8).required(),
      age: Joi.number().min(16).max(80).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(/^[A-Z][a-z]{3,8}$/),
    });
    return schema.validate(user,{abortEarly:false});
  }

  return (
    <>
<div className='container'>
  <div className='row'>



      <h2 className='my-3'>Rigister now </h2>

      {erroList.map((erro, index) => {
        if (index === 4) {
          return <div key={index} className="alert alert-danger" >password invalid</div>
        } else {
          return <div key={index} className="alert alert-danger" >{erro.message}</div>
        }
      }



      )}
      {erro ? <div className='alert alert-danger'>{erro}</div> : ''}
      <form className='py-4' onSubmit={submitRegister}>

        <label htmlFor='first_name'>first_name :</label>
        <input onChange={getUser} type="text" className='form-control my-3' id='first_name' name='first_name' />

        <label htmlFor='last_name'>last_name :</label>
        <input onChange={getUser} type="text" className='form-control my-3' id='last_name' name='last_name' />

        <label htmlFor='age'>age :</label>
        <input onChange={getUser} type="number" className='form-control my-3' id='age' name='age' />

        <label htmlFor='email'>email :</label>
        <input onChange={getUser} type="email" className='form-control my-3' id='email' name='email' />

        <label htmlFor='password'>password :</label>
        <input onChange={getUser} type="password" className='form-control my-3' id='password' name='password' />

        <button className='btn btn-outline-info'>
          {isloading ? <i className='fas fa-spinner fa-spain'></i> : 'Register'}
        </button>
      </form>



      </div>
</div>

    </>
  )
}
