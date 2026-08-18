
import OrderRepair from "./orderrepair"
import CheckStatus from "../pages/CheckStatus"
import './navbar.css'
import { Link } from "react-router"
import { useUserAuth } from "../context/authenticationcontext"
import { useState } from "react"

export default function Navbar()
{
    const { user, setUser, Logout} = useUserAuth();

    return (
        <>
            <div className="justify-content-between d-flex align-items-center p-2 m-2">
                <div className="d-flex m-2">
                <img src='../src/assets/logomain.png' width={50} className="m-1"></img>
                <h1 className="mb-0 title-name">Repair<span className="text-success">Lah!</span></h1>
                <span><b>2026</b></span>
                </div>
                
                <div className="gap-2 p-4 d-flex">
                    <Link to="/" className="btn btn-success border border-2">Home</Link>
                    <Link to="/check-status" className="btn btn-success border border-2">Check Status</Link>

                    { !user && (
                    <>
                    <Link to="/login" className="btn btn-success border border-2">Login</Link>
                    <Link to="/register" className="btn btn-success border border-2">Register</Link>
                    </>
                    ) }

                    { user && (
                        <div className="d-flex">
                        <button className="btn btn-success border border-2" onClick={Logout}>Logout</button>

                        <div>
                        <p className="m-2">Hello! <b>{user?.email}, {user?.name}</b></p>
                        </div>
                        </div>                   
                    )} 
                </div>
            </div>
        </>

    )
}
