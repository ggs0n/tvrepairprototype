import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { useUserAuth } from "../context/authenticationcontext";
import StatusTracker from "../components/statustracker";

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
            
            <div className="container-fluid min-vh-100 align-items-center d-flex flex-column p-2 m-2 border border-2 bg-white">
                <h1>Your Order</h1>
                <img src="../src/assets/boxempty.png" width={200}></img>
                {orders?.length > 0 ? (
                <div>
                    <div>
                        <table className="border border-4 bg-light border border-2 border-dark p-4 m-4 gap-2">
                            <thead className="border border-2 border-black p-2 m-2 gap-2">
                                <tr>
                                    <th>Brand</th>
                                    <th>Area</th>
                                    <th>Issue Description</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {orders.map((order)=> (
                                <tr key={order.id}>
                                    <td>{order.brand}</td>
                                    <td>{order.area}</td>
                                    <td>{order.issueDescription}</td>
                                    <td>{statusmessage[order.status]}</td>
                                </tr>
                             ))}
                             </tbody>
                        </table>
                    </div>

                </div>
                ) : (<p>No orders. Let's get started here!</p>
                )}
                <button className="btn btn-success m-2">Call Technician</button>
            </div>
        </div>
    )
}