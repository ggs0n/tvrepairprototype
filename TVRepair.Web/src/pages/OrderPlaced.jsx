import { MonitorCheck } from "lucide-react"

export default function OrderPlaced ({orders})
{
    return (  
    <div className="flex justify-content-between border border-2 border-gray-200 rounded-xl">

            <div className="flex mb-4 p-4 py-5">
                <div>
                <MonitorCheck className="mr-3"></MonitorCheck>
                </div>
                <div>
                <h1 className="font-bold mb-2">Order Details</h1>
                <h1>Brand : { orders.brand} </h1>
                <h1>Issue Description : {orders.issueDescription}</h1>
                </div>
            </div>

            <div className="mb-4 p-4 py-5 bg-green-100 p-2 m-4">
                <h1 className="font-bold">What Happens next?</h1>
                <h1>Our technician will review your request and get in touch with you soon</h1>
                <h1>You will be notified on each stage</h1>
            </div>

            <div className="mt-4 mb">
                <h1>Need help</h1>
                <h1>Our support team is ready to assist you</h1>
                <button className="bg-green-700 py-2 p-2 w-50 align-middle text-white rounded-b-xl">Chat with us</button>
            </div>

        </div>
    )
}