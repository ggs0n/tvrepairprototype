import './statustracker.css'

const steps = [
    {
        status: "OrderPlace",
        label: "Order Place"
    },
    {
        status: "Accepted",
        label: "Technician Accepted"
    },
    {
        status: "Quotation",
        label: "Quotation & Diagnosis"
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


        <div className="justify-center flex">
            <div className="flex gap-5 items-center justify-center flex border border-gray-200 p-10">
                
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