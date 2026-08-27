export default function TechnicianAccepted({orders})
{
    return (
    <div className="row w-100 m-2 p-4">
        <div className="col-12 border border-4">
            <h1>Current Update</h1>
            <h3>Technician has accepted your repair</h3>
            <h3>Technician id : {orders.technicianId}</h3>
            <h3>Area : {orders.area}</h3>
            <h3>Visit Schedule : {orders.createdDate}</h3>
            <h3>Please ensure someone is availabe on visit schedule date</h3>
        </div>
    </div>
    )
}