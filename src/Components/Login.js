import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

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
    let formData= new FormData();
    formData.append("firstname",this.state.firstname);
    formData.append("lastname", this.state.lastname);
    formData.append("password", this.state.password);
    const url="http://localhost:4443/dashboard/php/react-backend/index.php";
    axios.post(url, formData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    }
    render(){
        return (
            <div className="loginForm">
                <h1>Log In</h1>
                <p>Already Registred? Log In Here</p>
                <form onSubmit={this.goToServices} >
                    <input type="text"
                     name="firstname" 
                     placeholder="First name"
                     onChange={this.handleChange}
                     />
                     <br/>
                     <br/>
                    <input type="text"
                     name="lastname" 
                     placeholder="Last name"
                     onChange={this.handleChange}
                     />
                     <br/><br/>
                     <input type="password"
                     name="password" 
                     placeholder="Password"
                     onChange={this.handleChange}
                     />
                     <br/>
                     <br/>
                     <button type="submit" >Submit</button>
                     <br/>
                     <br/>
                    <p>Not registred yet? Sign Up Here <Link to="/register">Register</Link> </p>
                </form>
            </div>
        );
    }
}
export default Login;