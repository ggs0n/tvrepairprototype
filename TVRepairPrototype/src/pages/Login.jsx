import { Link, useInRouterContext, useNavigate } from "react-router"
import { useState, useEffect } from "react";
import { useUserAuth } from "../context/authenticationcontext";
export default function Login()

{

    const { setUser } = useUserAuth();
    const navigate = useNavigate();

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
            navigate("/");

        }
        else {
            alert("login failed")
        }

    }

    return (
    <>
    <div className="border border-5">
        <form onSubmit={LoginUser}>
        <div className="container p-2 gap-3 d-flex flex-column col-5">
            <h1>Login Detail</h1>
            <label>Email : </label>
            <input type="text" name="email" className="form-control"></input>
            <label><input type="radio" value="customer" name="customertype"></input> Customer</label>
            <label><input type="radio" value="technician" name="customertype"></input> Technician</label>
            
            <label>Password :</label>
            <input type="password" name="password" className="form-control"></input>
            <label>Re-enter Password :</label>
            <input type="password" name="reenterpass" className="form-control"></input><br/>
        </div>
        <div className="d-flex container align-items-center gap-2 col-5">
            <button className="btn btn-primary" type="submit">Login</button>
            <Link to="/forgotpassword" className="btn btn-primary" >Forgot Password</Link>
        </div>
        </form>
    </div>
    </>
    )
}
