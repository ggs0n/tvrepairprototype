import { Link, useInRouterContext, useNavigate } from "react-router"
import { useState, useEffect } from "react";
import { useUserAuth } from "../context/authenticationcontext";
import { useLocation } from "react-router";

export default function Login()

{
    
    const { user, setUser, isLogout } = useUserAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const logoutmessage = location.state?.message;

    async function LoginUser(event)
    {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);

        if (formData.get("password") !== formData.get("reenterpass"))
        {
            alert("Password not match")
            return;
        }

        const response = await fetch
        ('http://localhost:5070/api/Authentication/loginuser', 
        {
            method : "POST",
            credentials: "include",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              email : formData.get("email"),
              password : formData.get("password")
            })
        });

        if(response.ok)
        {
            const responsedata = await response.json();
            setUser(responsedata);
            alert("login success");

            if (responsedata.customertype == 'customer')
            navigate("/");
            else if(responsedata.customertype == 'technician')
            navigate("/technicianpage")

        }
        else {
            alert("login failed")
        }

    }

    return (
    <div className="min-vh-100 m-2 p-2">
    <div className="row">
        <div className="m-2 p-2 d-flex flex-column col-2">
        <img src="../src/assets/tvpicturemainpage.png" width={650} height={500}></img>
        </div>

        {logoutmessage && (
            <div>
                <p>{logoutmessage}</p>
                </div>
        )}
        
        <div className="container d-flex flex-column col-4 p-4 mb-4">
            <form onSubmit={LoginUser}>
            <h1>Login Detail</h1>
            <label>Email : </label>
            <input type="text" name="email" className="form-control p-2"></input>
            <label><input type="radio" value="customer" name="customertype"></input> Customer</label>
            <label><input type="radio" value="technician" name="customertype"></input> Technician</label>
            <br></br><br></br>
            <label>Password :</label>
            <input type="password" name="password" className="form-control"></input>
            <br></br>
            <label>Re-enter Password :</label>
            <input type="password" name="reenterpass" className="form-control"></input><br/>

            <div className="d-flex container align-items-center gap-2 col-5">
            <button className="btn btn-primary" type="submit">Login</button>
            <Link to="/forgotpassword" className="btn btn-primary" >Forgot Password</Link>
            </div>
            
            </form>
        </div>
        </div>

    </div>
    )
}
