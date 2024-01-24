import React from "react";
const Register = () => {
    return (
        <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Web Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="Enter your Name"/>
                <input type="email" placeholder="Enter email"/>
                <input type="password" placeholder="Password"/>
                <input type="file"/>
                <button>Sign Up</button>
            </form>
            <p>You do have an Account? Login</p>
            </div>
        </div>
    )
}
export default Register