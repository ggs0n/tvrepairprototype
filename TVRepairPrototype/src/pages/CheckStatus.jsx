import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query";



export default function CheckStatus()
{
    const [orders, setOrder] = useState([]);

    async function LoadOrder()
    {
        const response = await fetch
        ('https://localhost:7125/api/TVRepair/GetRepairOrder');


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
            <div className="container align-items-center d-flex flex-column p-4">
                <h1>Your Order</h1>
                <div>
                    <div>
                        <table className="border border-4">

                            <thead>
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
                <br/>
                <button>Call Technician</button>
            </div>
        </>
    )
}