import React from 'react';
import {Link} from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstname: "",
            lastname:"",
            password: ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.goToServices=this.goToServices.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    goToServices(e){
        e.preventDefault();
        this.props.history.push("/select");

    }
    render(){
        return (
            <div className="loginForm">
                <h2>Log In</h2>
                <p>Already Registred? Log In Here</p>
                <form onSubmit={this.goToServices} >
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
                     <button type="submit" >Submit</button>

                     <p>Not registred yet? Sign Up Here <Link to="/register">Register</Link> </p>
                     


                </form>
            </div>
        );
    }
}
export default Login;