import React from 'react'
import './Register.css'
function Register() {
  return (
    <div className='register'>
      <div className="form">
        <div className='avatar'>
          avatar
        </div>
        <h2>Sign Up</h2>
        <div className="formContent">
          <form action="">
            <div>
            <label>Firstname</label>
            <input  type="text" />
            </div>
            <div>
            <label>Surname</label>
            <input  type="text" />
            </div>
            <div>
            <label>Username</label>
            <input  type="text" />
            </div>
            <div>
            <label>Phonenumber</label>
            <input  type="text" />
            </div>
            <div>
            <label>Email</label>
            <input  type="email" />
            </div>
            <div>
            <label>Password</label>
            <input  type="password" />
            </div>
            <div>
            <label>Confirm password</label>
            <input  type="password" />
            </div>
            <div>
           
            <input  type="submit" value='SIGN UP' />
            </div>
          </form>
            <span>Already have an account? <i>sign in</i></span>
                              </div>
      </div>
    
    </div>
  )
}

export default Register