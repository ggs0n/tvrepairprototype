import './statustracker.css'

const steps = [
    {
        status: "OrderPlace",
        label: "Order Place"
    },
    {
        status: "SearchingTechnician",
        label: "Searching Technician"
    },
    {
        status: "Accepted",
        label: "Technician Accepted"
    },
    {
        status: "InProgress",
        label: "In Progress"
    },
    {
        status: "Completed",
        label: "Completed"
    }
]


export default function StatusTracker({
    currentStatus,orderId
})
{

    return (


        <div className="container mx-auto d-flex gap-2 flex-column justify-content-center">
            <div className="d-flex flex-column align-items-center text-center">
            <h2>Order ID</h2>
            <p>{orderId}</p>
            </div>
            <div className="container m-2 p-2 d-flex gap-4 justify-content-center">
                
                {steps.map((step,index)=>{

                    const isCurrent = step.status == currentStatus;

                    return (
                    
                        
                    <div key={step.status} className='text-center'>
                        <div className={isCurrent ? "status-circle current" : "status-circle"}> 
                        { isCurrent ? "✓" : ""}
                        </div>
                        {step.label}
                    </div>
                    )
                })}
            </div>

        </div>
    )

}