import React from 'react';
import {Link} from 'react-router-dom';

class Register extends React.Component{
    render(){
        return (
            <div className="registerForm">
                <h2>Register</h2>
                <p>Create an account here</p>
                <form>
                <input type="text"
                     name="firstname" 
                     placeholder="First name"
                     onChange={this.handleChange}
                     />
                     <br/>
                      <input type="text"
                     name="lastname" 
                     placeholder="Last name"
                     onChange={this.handleChange}
                     />
                     <br/>
                     <input type="password"
                     name="password" 
                     placeholder="Password"
                     onChange={this.handleChange}
                     />
                     <br/>
                     <button type="submit">Submit</button>
                </form>
                <br/>
                <p>Go back to Log In   <Link to="/">Log In</Link></p>
               

            </div>
        )
    }
}
export default Register;