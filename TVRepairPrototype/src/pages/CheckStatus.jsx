import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { useUserAuth } from "../context/authenticationcontext";


export default function CheckStatus()
{
    const [orders, setOrder] = useState([]);
    const {user} = useUserAuth();

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
        <div className="min-vh-60 d-flex justify-content-center">
            <div className="container align-items-center d-flex flex-column p-2 m-2 border border-2 bg-white">
                <h1>Your Order</h1>
                <img src="../src/assets/boxempty.png" width={200}></img>
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
                ) : (<p>No orders. Let's get started here!</p>
                )}
                <button className="btn btn-success m-2">Call Technician</button>
            </div>
        </div>
    )
}