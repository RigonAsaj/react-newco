import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:"",
            email:"",
            pass:""

        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit(e){
        e.preventDefault();
        let formData= new FormData();
        formData.append("fname",this.state.fname);
        formData.append("lname", this.state.lname);
        formData.append("email",this.state.email);
        formData.append("pass", this.state.pass);
        const url="http://localhost:4443/dashboard/php/react-backend/register.php";
        axios.post(url, formData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        }


    render(){
        return (
            <div className="registerForm">
                <h1>Register</h1>
                <p>Create an account here</p>
                <form onSubmit={this.handleSubmit}>
                <input type="text"
                     name="fname" 
                     placeholder="First name"
                     onChange={this.handleChange}
                     />
                     <br/><br/>
                    <input type="text"
                     name="lname" 
                     placeholder="Last name"
                     onChange={this.handleChange}
                     />
                     <br/><br/>
                     <input type="text"
                     name="email"
                     placeholder="Email"
                     onChange={this.handleChange}
                     />
                     <br/><br/>
                     <input type="password"
                     name="pass" 
                     placeholder="Password"
                     onChange={this.handleChange}
                     />
                     <br/><br/>
                     <button type="submit">Submit</button>
                </form>
                <br/>
                <p>Go back to <Link to="/">Log In</Link></p>
            </div>
        )
    }
}
export default Register;