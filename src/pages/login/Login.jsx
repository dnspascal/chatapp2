import React from 'react';
import Background from "../Background";
import  PersonOutline from '@mui/icons-material/PersonOutline';
import './login.css';
function Login(){
    return (
        <div className="overall2">
            <div>
                <Background/>
            </div>
            <div className="content2">
                <div className="innerContent">
                    <div className='form2'>
                        <div className="avatarDiv">
                            <PersonOutline style={{fontSize:'100px'}} className="avatar2"/>
                        </div>
                        <div>
                            <h5>LOGIN</h5>
                        </div>
                        <form>
                            <label htmlFor="email" className="input">
                                <span> email</span> <input type="email" name="email" placeholder='enter your email'
                                                           id="email"/>
                            </label><br/>
                            <label htmlFor="password" className="input">
                                <span>password</span> <input type="password" name="password"
                                                             placeholder='enter your password'
                                                             id="password"/>
                            </label><br/>
                            <div className=" submit2"><input type="submit"  className=" submit3" value='SIGN IN'/></div>
                        </form>
                        <div>
                            <p>forgot password?</p>
                            <p>Don't have an account <i>SIGN UP</i></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );

}
export default Login;