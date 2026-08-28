import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { useUserAuth } from "../context/authenticationcontext";
import StatusTracker from "../components/statustracker";
import OrderPlaced from "./OrderPlaced";
import TechnicianAccepted from "./TechnicianAccepted";
import QuotationCustomer from "./QuotationCustomer";

export default function CheckStatus()
{
    const [orders, setOrder] = useState([]);
    const [selectedorderid, setselectedOrderId] = useState("");
    const {user} = useUserAuth();

    const statusmessage = {
        OrderPlace : "Your order has been placed."
    }

    const selectedorder = orders.find(order => order.id === selectedorderid) ?? orders[0] ?? null;

    async function LoadOrder()
    {
        if (user?.email==null)
        {
            return;
        }

        const query = new URLSearchParams(
            {
                UserName : user.email
            }
        );

        const response = await fetch
        (`http://localhost:5070/api/TVRepair/GetRepairOrder?${query}`);

        const data = await response.json();

        if(response.ok)
        {
        setOrder(data);
        }
    }

    useEffect(()=> {
        LoadOrder();
    }, [user?.email])


    return (
        <div className="d-flex justify-content-center align-items-center flex-column justify-content-center">
            <h1>Track Your Repair</h1>
            <h2>Stay updated </h2>
            
            <select className="mb-2 m-2 p-2" onChange={event => setselectedOrderId(event.target.value)}>
                {orders.map((order)=> (
                <option value={order.id}>{order.id}</option>
                ))}
            </select>
                        
            <div className="justify-content-center align-content-centent mb-2">
                { selectedorder && (
                <StatusTracker orderId={selectedorder.id} currentStatus={selectedorder.status}></StatusTracker>
                )
                }
            </div>

            { selectedorder?.status == "OrderPlace" && (
            <OrderPlaced orders={selectedorder}></OrderPlaced>
            )}
            
            { selectedorder?.status == "Accepted" && (
            <TechnicianAccepted orders={selectedorder}></TechnicianAccepted>
            )}

            { selectedorder?.status == "Quotation" && (
            <QuotationCustomer orders={selectedorder}></QuotationCustomer>
            )}


        </div>
    )
}