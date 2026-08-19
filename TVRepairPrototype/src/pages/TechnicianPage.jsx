import { useUserAuth } from "../context/authenticationcontext";
import { useState,useEffect } from "react";
export default function TechnicianPage () {

    const {user} = useUserAuth();
    const [orderlist, setOrderTechnician]  = useState([])

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

    return (
    <div className="container">
        <p>Technician Page</p>
        <form>
            <table>
                <thead>
                    <th>Show Order Service</th>
                </thead>
                {orderlist.map((order) => (
                <tbody key={order.id}>
                    <tr>
                        {order.brand}
                    </tr>
                    <tr>
                        {order.area}
                    </tr>
                    <tr>
                        {order?.userName}
                    </tr>
                </tbody>
                ))}
            </table>
        </form>
    </div>

    ) 
}
