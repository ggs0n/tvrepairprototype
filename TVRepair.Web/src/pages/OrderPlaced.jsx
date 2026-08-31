export default function OrderPlaced ({orders})
{
    return (  
    <div className="container-fluid min-vh-100 align-items-center flex flex-column p-2 m-2 border border-2 bg-white">
                <h2>Your repair request has been received</h2>
                <img src="../src/assets/boxempty.png" width={200}></img>
                {orders? (
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
                                <tr key={orders.id}>
                                    <td>{orders.brand}</td>
                                    <td>{orders.area}</td>
                                    <td>{orders.issueDescription}</td>
                                    <td>{orders.status}</td>
                                </tr>
                             
                             </tbody>
                        </table>
                    </div>

                </div>
                ) : (<p>No orders. Let's get started here!</p>
                )}
        </div>
    )
}