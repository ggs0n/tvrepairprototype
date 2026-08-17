import { Link } from "react-router"

export default function Register()

{
    async function SubmitRegister(event)
    {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const response = await fetch
        ('http://localhost:5070/api/Authentication/registercustomer',
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify( {
             name : formData.get("name"),
             email : formData.get("email"),
             password : formData.get("password")
            })
        })

        const ErrorMessage = await response.text();


        if(response.ok)
        {
            return alert("Success");
        }
        else return alert(ErrorMessage);
    }

    return (
        <>
        <div className="border border-5">
        <form onSubmit={SubmitRegister}>
        <div className="container p-2 gap-2 d-flex flex-column col-5">
            <h1>Registration Detail</h1>
            <label>Name : </label>
            <input name="name" type="text" className="form-control"></input>
            <label>Email : </label>
            <input name="email" type="text" className="form-control"></input>
            <label>Password :</label>
            <input name="password" type="password" className="form-control"></input><br/>
            <label>Re-enter Password :</label>
            <input type="password" className="form-control"></input>
        </div>

        <div className="d-flex container align-items-center gap-2 col-5">
            <button type="submit">Register</button>
        </div>
        </form>
        </div>
        </>
    )
}