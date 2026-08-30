import { replace, useNavigate } from "react-router";

export default function ForgotPassword()

{
    const navigate = useNavigate();

    async function SendEmailResetPassword(event)
    {
        event.preventDefault();

        const formdata = new FormData(event.currentTarget);

        const email = formdata.get("email");
        
        const response = await fetch("http://localhost:5070/api/auth/forgotPassword", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({email})
        })

        if(response.ok) {
        alert("Code sent")
        navigate("/login", { replace : true})  
        }
        else {
            alert(response.status)
        }

    }
    return (
        <form className="container col-4 p-5" onSubmit={SendEmailResetPassword}>
            <p>Email</p>
            <input name="email" className="form-control" type="text"></input>
            <button type="submit">Send email for reset password</button>
        </form>
    )

}