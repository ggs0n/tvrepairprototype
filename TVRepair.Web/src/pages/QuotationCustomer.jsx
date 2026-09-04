import { useEffect,useState } from "react";
import { useUserAuth } from "../context/authenticationcontext";

export default function QuotationCustomer ({orders})
{

        const [paymentsummary ,setPaymentSummary] = useState("")


        async function Pay()
        {
            const paymentsummary = await fetch('http://localhost:5070/api/payment/GetPaymentSummary', {
                method : "POST",
                type : {
                    type : "application/json"
                },
                headers : {
                  "Content-Type" : "application/json"
                },
                body : JSON.stringify ({
                    orders
                })
            })

            if (paymentsummary.ok)
            {
              const response = await paymentsummary.json();
              setPaymentSummary(response)
            }


        }

        return (
            <div className="border border-1">
                <div className="grid-cols-2 align-middle justify-between flex">
                    <div>
                    <img className="item-center align-middle" src="../src/assets/boxempty.png" width={300}></img>
                    </div>
                    <div>

                    <div className="text-center py-10 w-100">
                    <h1>Quotation Detail</h1>
                    <p>Issue : {orders.quotationDesc}</p>
                    <p>Amount : {orders.quotationAmount}</p>
                    </div>
                    </div>
                    <button className="bg-green-700" onClick={Pay}>Accept & Pay</button>
                </div>
                
            </div>
        )
}