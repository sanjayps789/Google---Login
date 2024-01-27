import React, { useState } from 'react'
import loginImage from '../src/assets/loginImage.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { GoogleLogin } from '@react-oauth/google';

function Login() {

 const [inputDatas,setInputDatas] = useState({
  email:"",password:""
 })

 const [emailValid,setEmailValid] = useState(false)
 const [passwordValid,setPasswordValid] = useState(false)

 const setData = (e) =>{
  const {name,value} = e.target 
  
  if(name=='email'){
    if(value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
      setEmailValid(false)
    }
    else{
      setEmailValid(true)
    }
  }

  // -----------------------------

  if(name=='password'){
    if(value.match(/^[a-zA-Z0-9]+$/)){
      setPasswordValid(false)
    }
    else{
      setPasswordValid(true)
    }
  }
  setInputDatas({...inputDatas,[name]:value})
 }
 console.log(inputDatas);
 
    const onSuccess=(credentialResponse) => {
        console.log(credentialResponse);
      }

      const onError=() => {
        console.log('Login Failed');
      }
  return (
    <div>
        <div style={{ width: '100%', height: '100vh' }} className="d-flex align-items-center justify-content-center">
        <div className="container w-75">
          <div className='card shadow bg-light p-3'>
            <div className="row align-items-center">
              <div className="col-lg-6 my-3">
                <img className='img-fluid' src={loginImage} alt="Authentication" />
              </div>
              <div className="col-lg-6">
                <Form className='text-black'>
                  <h1 className='mb-3'>Login</h1>
                  {/* email */}
                  <FloatingLabel controlId="floatingInput"   label="Email" className="mb-3">
                    <Form.Control onChange={(e)=>setData(e)} name='email'  type="email" placeholder="Email" />
                  </FloatingLabel>

                  {emailValid&&
                    <div>
                    <p className="text-danger py-2">Invalid email</p>
                  </div>}

                  {/* password */}
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control onChange={(e)=>setData(e)} name='password' type="password" placeholder="Password" />
                  </FloatingLabel>

                 {passwordValid&&
                  <div>
                  <p className="text-danger py-2">Invalid Password</p>
                 </div>}
                  <div className="d-flex justify-content-between align-items-center my-3 flex-wrap">
                    <p className='checkbox fs-6'><input className='me-2' type="checkbox" />Remember me</p>
                    <a href="">Forgot password?</a>
                  </div>
                  <button className="btn btn-success w-100">Login</button>
                </Form>
                <h6 className='text-center my-4'>OR</h6>
   {/* google authentcation btn */}
               <div className='d-flex justify-content-center'>
                    <GoogleLogin
                    
                      onSuccess={onSuccess}
                      onError={onError} />
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login