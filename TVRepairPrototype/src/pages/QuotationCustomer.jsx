import { useEffect,useState } from "react";
import { useUserAuth } from "../context/authenticationcontext";

export default function QuotationCustomer ({orders})
{
        async function Pay()
        {

        }

        return (
            <div className="container m-2 p-2 border border-1">
                <div className="row">
                    <div className="col-4">
                    <img src="../src/assets/boxempty.png" width={300}></img>
                    </div>
                    <div className="col-4">
                    <h1>Quotation Detail</h1>
                    <p>Issue : {orders.quotationDesc}</p>
                    <p>Amount : {orders.quotationAmount}</p>
                    </div>
                    <button className="btn btn-success" onClick={Pay}>Accept & Pay</button>
                </div>
                
            </div>
        )
}