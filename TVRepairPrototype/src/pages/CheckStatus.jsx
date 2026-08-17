import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { useUserAuth } from "../context/authenticationcontext";


export default function CheckStatus()
{
    const [orders, setOrder] = useState([]);
    const {user} = useUserAuth();

    async function LoadOrder()
    {
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
    }, [])


    return (
        <>
            <div className="container align-items-center d-flex flex-column p-4 border border-2 bg-success">
                <h1>Your Order</h1>
                {orders?.length > 0 ? (
                <div>
                    <div>
                        <table className="border border-4 bg-light border border-2 border-dark p-2 m-2">
                            <thead className="border border-2 border-black p-2 m-2 gap-2">
                                <tr>
                                    <th>Brand</th>
                                    <th>Area</th>
                                    <th>Issue Description</th>
                                </tr>
                            </thead>
                            <tbody>
                            {orders.map((order)=> (
                                <tr key={order.id}>
                                    <td>{order.brand}</td>
                                    <td>{order.area}</td>
                                    <td>{order.issueDescription}</td>
                                </tr>
                             ))}
                             </tbody>
                        </table>
                    </div>

                </div>
                ) : (<p>No orders</p>
                )}
                <br/>
                <button>Call Technician</button>
            </div>
        </>
    )
}