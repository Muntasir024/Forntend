import axios from "axios";
import { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
 
function Register()
{

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
 
   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/user/register",
        {
            email : email,
            password : password,
            firstName: firstName,
            lastName : lastName
        });
          alert("User Registation Successfully");
          
          setEmail("");
          setPassword("");
          setFirstName("");
          setLastName("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            <p>Fill in the Information Below</p>
 
            <input type="text"
            name="email"
            placeholder="Email"
            onChange={(event) =>
                {
                    setEmail(event.target.value);      
                }}          
            />

            <input type="text"
            name="password"
            placeholder="Password"
            onChange={(event) =>
                {
                    setPassword(event.target.value);      
                }}          
            />
 
            <input type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(event) =>
                {
                    setFirstName(event.target.value);      
                }}
            />
 
            <input type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(event) =>
                {
                    setLastName(event.target.value);      
                }}          
            />
 
 
            <button type="submit" onClick={() => {history.push("/login");}}>Register</button>
 
    
            </form>    
 
    
        </div>
    )
}
 
export default Register;