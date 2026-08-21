import { useUserAuth } from "../context/authenticationcontext";
import { useState,useEffect } from "react";
export default function TechnicianPage () {

    const {user} = useUserAuth();
    const [orderlist, setOrderTechnician]  = useState([])
    const [statusupdate, setStatusUpdate] = useState()

    async function GetOrderTechnician()
    {
        const query = new URLSearchParams (
            {
            Area : user?.area
        });

        const response = await fetch(`http://localhost:5070/api/tvrepair/GetRepairOrderTechnician?${query}`)

        const data = await response.json()

        if(response.ok)
        {
           setOrderTechnician(data)
        }
        else alert("No order found")
    }

    useEffect(() => {
        GetOrderTechnician();
    }, []);


    async function AcceptJob(orderid)
    {
        const query = new URLSearchParams (
            {
                TechnicianId : user.id,
                Id : orderid
            }
        ) 

        const result = await fetch(`http://localhost:5070/api/tvrepair/AcceptRepairOrderTechnician?${query}`,
            {
                method : "POST"
            }
        )

        const data = await result.json()

        if(result.ok)
        {
            alert("Updated")
            setOrderTechnician(previousOrders =>
            previousOrders.map(order =>
                order.id === data.id
                    ? { ...order, ...data }
                    : order
            )
            );
        }
        else alert("error")
        
    }

    return (
    <div className="container d-flex flex-column border border-2">
        <p>Technician Page</p>
            <table className="container">
                <thead>
                    <th>Brand</th>
                    <th>Area</th>
                    <th>Username</th>
                    <th>Status</th>
                </thead>
                {orderlist.map((order) => (
                <tbody key={order.id}>
                    <tr>
                        <td>{order?.brand}</td>
                        <td>{order?.area}</td>
                        <td>{order?.userName}</td>
                        <td>{order?.status}</td>
                        <td>
                            <button onClick={() => AcceptJob(order.id)}>Accept Job</button>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
    </div>

    ) 
}
